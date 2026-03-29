import { useState } from 'react';
import type { MuscleCategory } from '../App.tsx';
import { getMusclesByCategory } from '../data/muscles.ts';
import { MuscleIcon, BoneIcon, NeuronIcon, JointIcon, AllIcon } from './icons/AnatomyIcons.tsx';
import './GameScreen.css';

interface GameScreenProps {
  players: string[];
  category: MuscleCategory;
  onPlayAgain: (newCategory?: MuscleCategory, updatedScores?: PlayerScore[]) => void;
  onNewGame: () => void;
  persistentScores: PlayerScore[];
}

interface PlayerScore {
  player: string;
  score: number;
}

const GameScreen = ({ players, category, onPlayAgain, onNewGame, persistentScores }: GameScreenProps) => {
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [roles, setRoles] = useState<{ player: string; role: string; isImposter: boolean }[]>([]);
  const [gamePhase, setGamePhase] = useState<'reveal' | 'discussion' | 'playerVoting' | 'imposterVoting' | 'result'>('reveal');
  const [currentAsker, setCurrentAsker] = useState(0);
  const [currentAnswerer, setCurrentAnswerer] = useState(1);
  const [questionCount, setQuestionCount] = useState(0);
  const [scores, setScores] = useState<PlayerScore[]>(persistentScores);
  const [selectedMuscle, setSelectedMuscle] = useState<string>('');
  const [muscleOptions, setMuscleOptions] = useState<string[]>([]);
  const [playerVotes, setPlayerVotes] = useState<{ [player: string]: string }>({});
  const [imposterGuessedCorrectly, setImposterGuessedCorrectly] = useState(false);

  const startGame = () => {
    const muscles = getMusclesByCategory(category);
    const randomMuscle = muscles[Math.floor(Math.random() * muscles.length)];
    const imposterIndex = Math.floor(Math.random() * players.length);
    
    const gameRoles = players.map((player, index) => ({
      player,
      role: index === imposterIndex ? 'IMPOSTER' : randomMuscle,
      isImposter: index === imposterIndex
    }));
    
    // Generate 6 muscle options including the correct one
    const correctMuscle = randomMuscle;
    const otherMuscles = muscles.filter(m => m !== correctMuscle);
    const shuffled = otherMuscles.sort(() => Math.random() - 0.5).slice(0, 5);
    const options = [...shuffled, correctMuscle].sort(() => Math.random() - 0.5);
    
    setRoles(gameRoles);
    setMuscleOptions(options);
    setGameStarted(true);
  };

  const handleReveal = () => {
    setRevealed(true);
  };

  const handleNext = () => {
    if (currentPlayerIndex < players.length - 1) {
      setCurrentPlayerIndex(currentPlayerIndex + 1);
      setRevealed(false);
    } else {
      // All players revealed, start discussion phase
      setGamePhase('discussion');
      setCurrentAsker(0);
      setCurrentAnswerer(1);
      setQuestionCount(0);
    }
  };

  const handleNextQuestion = () => {
    const newCount = questionCount + 1;
    setQuestionCount(newCount);

    // Pick random asker and answerer (different from each other)
    let nextAsker = Math.floor(Math.random() * players.length);
    let nextAnswerer = Math.floor(Math.random() * players.length);
    
    // Ensure asker and answerer are different
    while (nextAsker === nextAnswerer) {
      nextAnswerer = Math.floor(Math.random() * players.length);
    }

    setCurrentAsker(nextAsker);
    setCurrentAnswerer(nextAnswerer);
  };

  const handleStartVoting = () => {
    setGamePhase('playerVoting');
    setPlayerVotes({});
  };

  const handlePlayerVote = (voter: string, suspectName: string) => {
    setPlayerVotes(prev => ({
      ...prev,
      [voter]: suspectName
    }));
  };

  const handleSubmitPlayerVotes = () => {
    // Count votes
    const voteCounts: { [name: string]: number } = {};
    Object.values(playerVotes).forEach(vote => {
      voteCounts[vote] = (voteCounts[vote] || 0) + 1;
    });

    // Find who got the most votes
    let maxVotes = 0;
    let mostVoted = '';
    Object.entries(voteCounts).forEach(([name, count]) => {
      if (count > maxVotes) {
        maxVotes = count;
        mostVoted = name;
      }
    });

    const actualImposter = roles.find(r => r.isImposter)?.player || '';
    
    if (mostVoted !== actualImposter) {
      // Players guessed wrong - Imposter wins immediately
      const newScores = [...scores];
      const imposterScore = newScores.find(s => s.player === actualImposter);
      if (imposterScore) {
        imposterScore.score += 1;
      }
      setScores(newScores);
      setImposterGuessedCorrectly(false);
      setGamePhase('result');
    } else {
      // Players guessed correctly - Give imposter a chance
      setGamePhase('imposterVoting');
      setSelectedMuscle('');
    }
  };

  const handleMuscleSelect = (muscle: string) => {
    setSelectedMuscle(muscle);
  };

  const handleSubmitImposterVote = () => {
    const correctMuscle = roles.find(r => !r.isImposter)?.role || '';
    const isCorrect = selectedMuscle === correctMuscle;
    
    // Update scores
    const newScores = [...scores];
    
    if (isCorrect) {
      // Imposter guessed correctly - Everyone gets 1 point
      newScores.forEach(score => {
        score.score += 1;
      });
      setImposterGuessedCorrectly(true);
    } else {
      // Imposter guessed wrong - Only other players get 1 point each
      const imposter = roles.find(r => r.isImposter);
      newScores.forEach(score => {
        if (score.player !== imposter?.player) {
          score.score += 1;
        }
      });
      setImposterGuessedCorrectly(false);
    }
    
    setScores(newScores);
    setGamePhase('result');
  };

  const handleRestart = () => {
    setCurrentPlayerIndex(0);
    setRevealed(false);
    setGameStarted(false);
    setRoles([]);
    setGamePhase('reveal');
    setQuestionCount(0);
    setSelectedMuscle('');
    onNewGame();
  };

  if (!gameStarted) {
    return (
      <div className="game-screen">
        <div className="game-intro">
          <div className="intro-icon">🎭</div>
          <h1>Ready to Play?</h1>
          <p>Pass the phone around. Each player will see their role.</p>
          <p className="intro-warning">One of you is the IMPOSTER!</p>
          
          <div className="player-list">
            <h3>Players ({players.length})</h3>
            {players.map((player, index) => (
              <div key={index} className="player-item">
                <span className="player-number">{index + 1}</span>
                <span className="player-name">{player}</span>
              </div>
            ))}
          </div>

          <button className="btn-begin" onClick={startGame}>
            BEGIN GAME
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  // Discussion Phase
  if (gamePhase === 'discussion') {
    return (
      <div className="game-screen">
        <div className="discussion-phase">
          <h2 className="phase-title">💬 Discussion Phase</h2>
          <p className="phase-subtitle">Question {questionCount + 1}</p>
          
          <div className="question-card">
            <div className="asker">
              <span className="label">Asking:</span>
              <span className="player-name">{players[currentAsker]}</span>
            </div>
            <div className="arrow">→</div>
            <div className="answerer">
              <span className="label">Answering:</span>
              <span className="player-name">{players[currentAnswerer]}</span>
            </div>
          </div>

          <div className="discussion-hint">
            <p>💡 {players[currentAsker]} asks {players[currentAnswerer]} a question about their muscle</p>
            <p className="hint-text">Be careful not to reveal the exact muscle name!</p>
          </div>

          {questionCount < 5 ? (
            <button className="btn-next-question" onClick={handleNextQuestion}>
              NEXT QUESTION
            </button>
          ) : (
            <div className="voting-ready">
              <p className="ready-text">Ready to vote?</p>
              <button className="btn-start-voting" onClick={handleStartVoting}>
                START VOTING
              </button>
              <button className="btn-more-questions" onClick={handleNextQuestion}>
                Ask More Questions
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Player Voting Phase - Everyone votes for who they think is the imposter
  if (gamePhase === 'playerVoting') {
    const allVoted = players.every(player => playerVotes[player]);
    
    return (
      <div className="game-screen">
        <div className="voting-phase">
          <h2 className="phase-title">🗳️ Vote for the Imposter</h2>
          <p className="voting-instruction">Each player votes for who they think is the imposter</p>
          <p className="voting-hint">Pass the phone around - everyone must vote!</p>

          <div className="player-voting-list">
            {players.map((voter, index) => (
              <div key={index} className="voter-section">
                <div className="voter-header">
                  <span className="voter-name">{voter}</span>
                  {playerVotes[voter] && <span className="voted-badge">✓ Voted</span>}
                </div>
                
                {!playerVotes[voter] ? (
                  <div className="suspect-options">
                    {players.filter(p => p !== voter).map((suspect, idx) => (
                      <button
                        key={idx}
                        className="suspect-option"
                        onClick={() => handlePlayerVote(voter, suspect)}
                      >
                        {suspect}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="vote-confirmed">
                    Voted for: <strong>{playerVotes[voter]}</strong>
                  </div>
                )}
              </div>
            ))}
          </div>

          <button 
            className="btn-submit-vote" 
            onClick={handleSubmitPlayerVotes}
            disabled={!allVoted}
          >
            REVEAL RESULTS
          </button>
        </div>
      </div>
    );
  }

  // Voting Phase - Only Imposter Votes
  if (gamePhase === 'imposterVoting') {
    const imposter = roles.find(r => r.isImposter);
    
    return (
      <div className="game-screen">
        <div className="voting-phase">
          <h2 className="phase-title">🎯 Imposter's Last Chance!</h2>
          <p className="voting-subtitle">{imposter?.player}</p>
          <p className="voting-instruction">Players found you! Guess the muscle to save everyone!</p>
          <p className="voting-hint">If you guess correctly, everyone gets a point. If wrong, only others get points.</p>

          <div className="muscle-options">
            {muscleOptions.map((muscle, index) => (
              <button
                key={index}
                className={`muscle-option ${selectedMuscle === muscle ? 'selected' : ''}`}
                onClick={() => handleMuscleSelect(muscle)}
              >
                {muscle}
              </button>
            ))}
          </div>

          <button 
            className="btn-submit-vote" 
            onClick={handleSubmitImposterVote}
            disabled={!selectedMuscle}
          >
            SUBMIT GUESS
          </button>
        </div>
      </div>
    );
  }

  // Results Phase
  if (gamePhase === 'result') {
    const correctMuscle = roles.find(r => !r.isImposter)?.role || '';
    const imposterName = roles.find(r => r.isImposter)?.player || '';
    const sortedScores = [...scores].sort((a, b) => b.score - a.score);
    
    // Determine what happened
    const playersFoundImposter = Object.values(playerVotes).length > 0;
    const voteCounts: { [name: string]: number } = {};
    Object.values(playerVotes).forEach(vote => {
      voteCounts[vote] = (voteCounts[vote] || 0) + 1;
    });
    let mostVoted = '';
    let maxVotes = 0;
    Object.entries(voteCounts).forEach(([name, count]) => {
      if (count > maxVotes) {
        maxVotes = count;
        mostVoted = name;
      }
    });
    const playersGuessedCorrectly = mostVoted === imposterName;

    return (
      <div className="game-screen">
        <div className="results-phase">
          <h2 className="phase-title">🎉 Game Over!</h2>
          
          <div className="reveal-card">
            <p className="reveal-label">The muscle was:</p>
            <h1 className="reveal-muscle">{correctMuscle}</h1>
            <p className="reveal-imposter">Imposter: {imposterName}</p>
          </div>

          {playersFoundImposter && (
            <div className="game-summary">
              {!playersGuessedCorrectly ? (
                <div className="summary-card imposter-won">
                  <div className="summary-icon">😈</div>
                  <h3>Imposter Wins!</h3>
                  <p>Players voted for <strong>{mostVoted}</strong></p>
                  <p className="summary-result">Imposter escaped without being caught!</p>
                </div>
              ) : (
                <div className="summary-card players-found">
                  <div className="summary-icon">🔍</div>
                  <h3>Players Found the Imposter!</h3>
                  <p>Imposter had a chance to guess the muscle</p>
                  {imposterGuessedCorrectly ? (
                    <p className="summary-result success">✓ Imposter guessed correctly - Everyone wins!</p>
                  ) : (
                    <p className="summary-result fail">✗ Imposter guessed wrong - Players win!</p>
                  )}
                </div>
              )}
            </div>
          )}

          <div className="scoreboard">
            <h3>🏆 Scores</h3>
            {sortedScores.map((score, index) => (
              <div key={index} className="score-item">
                <span className="score-rank">#{index + 1}</span>
                <span className="score-player">{score.player}</span>
                <span className="score-points">{score.score} pt{score.score !== 1 ? 's' : ''}</span>
              </div>
            ))}
          </div>

          <div className="category-quick-select">
            <p className="quick-select-label">Continue Playing:</p>
            <div className="quick-categories">
              <button 
                className="quick-cat-btn muscles"
                onClick={() => onPlayAgain('muscles', scores)}
                title="Muscles"
              >
                <span className="cat-icon"><MuscleIcon size={20} strokeWidth={2} /></span>
                <span className="cat-label">Muscles</span>
              </button>
              <button 
                className="quick-cat-btn bones"
                onClick={() => onPlayAgain('bones', scores)}
                title="Bones"
              >
                <span className="cat-icon"><BoneIcon size={20} strokeWidth={2} /></span>
                <span className="cat-label">Bones</span>
              </button>
              <button 
                className="quick-cat-btn nerves"
                onClick={() => onPlayAgain('nerves', scores)}
                title="Nerves"
              >
                <span className="cat-icon"><NeuronIcon size={20} strokeWidth={2} /></span>
                <span className="cat-label">Nerves</span>
              </button>
              <button 
                className="quick-cat-btn joints"
                onClick={() => onPlayAgain('joints', scores)}
                title="Joints"
              >
                <span className="cat-icon"><JointIcon size={20} strokeWidth={2} /></span>
                <span className="cat-label">Joints</span>
              </button>
              <button 
                className="quick-cat-btn highlight"
                onClick={() => onPlayAgain('all', scores)}
                title="All Categories"
              >
                <span className="cat-icon"><AllIcon size={24} strokeWidth={2.5} /></span>
                <span className="cat-label">ALL</span>
              </button>
            </div>
            <p className="quick-select-note">Keeps scores & players</p>
          </div>

          <div className="end-buttons">
            <button className="btn-restart" onClick={handleRestart}>
              NEW GAME (Reset Everything)
            </button>
          </div>

          <div className="copyright">
            <span className="copyright-label">Developed by: </span>
            <a href="https://www.instagram.com/elfox.photographer" target="_blank" rel="noopener noreferrer">
              elfox.photographer
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Reveal Phase (original code)
  const currentRole = roles[currentPlayerIndex];

  return (
    <div className="game-screen">
      <div className="game-progress">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${((currentPlayerIndex + 1) / players.length) * 100}%` }}
          />
        </div>
        <span className="progress-text">
          {currentPlayerIndex + 1} / {players.length}
        </span>
      </div>

      <div className="role-reveal">
        {!revealed ? (
          <div className="player-turn">
            <div className="turn-icon">👤</div>
            <h2>{currentRole.player}</h2>
            <p>It's your turn!</p>
            <p className="turn-instruction">Tap to see your role</p>
            <button className="btn-reveal" onClick={handleReveal}>
              REVEAL ROLE
            </button>
          </div>
        ) : (
          <div className={`role-card ${currentRole.isImposter ? 'imposter' : 'crewmate'}`}>
            <div className="role-icon">
              {currentRole.isImposter ? '🎭' : '💪'}
            </div>
            <h2 className="role-title">
              {currentRole.isImposter ? 'YOU ARE THE' : 'YOUR MUSCLE IS'}
            </h2>
            <h1 className="role-name">{currentRole.role}</h1>
            {currentRole.isImposter && (
              <p className="role-hint">Blend in and don't get caught!</p>
            )}
            {!currentRole.isImposter && (
              <p className="role-hint">Find the imposter among you!</p>
            )}
            
            <button className="btn-next" onClick={handleNext}>
              {currentPlayerIndex < players.length - 1 ? 'NEXT PLAYER' : 'START DISCUSSION'}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameScreen;
