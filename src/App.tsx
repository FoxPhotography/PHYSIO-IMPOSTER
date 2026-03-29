import { useState, useCallback } from 'react';
import './App.css';
import InstallPrompt from './components/InstallPrompt.tsx';
import CategorySelect from './components/CategorySelect.tsx';
import PlayerSetup from './components/PlayerSetup.tsx';
import GameScreen from './components/GameScreen.tsx';

export type MuscleCategory = 'muscles' | 'bones' | 'nerves' | 'joints' | 'all';

interface PlayerScore {
  player: string;
  score: number;
}

function App() {
  const [showInstall, setShowInstall] = useState(true);
  const [gameState, setGameState] = useState<'category' | 'setup' | 'game'>('category');
  const [category, setCategory] = useState<MuscleCategory>('all');
  const [players, setPlayers] = useState<string[]>([]);
  const [persistentScores, setPersistentScores] = useState<PlayerScore[]>([]);
  const [gameKey, setGameKey] = useState(0);

  const handleInstallDismiss = useCallback(() => {
    setShowInstall(false);
  }, []);

  const handleCategorySelect = (selectedCategory: MuscleCategory) => {
    setCategory(selectedCategory);
    setGameState('setup');
  };

  const handleStartGame = (playerNames: string[]) => {
    setPlayers(playerNames);
    
    // Initialize scores if first game, otherwise keep existing
    if (persistentScores.length === 0) {
      setPersistentScores(playerNames.map(name => ({ player: name, score: 0 })));
    } else {
      // Update scores array if players changed
      const updatedScores = playerNames.map(name => {
        const existing = persistentScores.find(s => s.player === name);
        return existing || { player: name, score: 0 };
      });
      setPersistentScores(updatedScores);
    }
    
    setGameState('game');
  };

  const handleBackToCategory = () => {
    setGameState('category');
  };

  const handlePlayAgain = (newCategory?: MuscleCategory, updatedScores?: PlayerScore[]) => {
    if (newCategory) {
      setCategory(newCategory);
    }
    if (updatedScores) {
      setPersistentScores(updatedScores);
    }
    setGameKey(prev => prev + 1); // Force remount
    setGameState('game');
  };

  const handleNewGame = () => {
    setPersistentScores([]);
    setPlayers([]);
    setGameState('category');
  };

  return (
    <div className="app">
      {/* Floating Bones Background */}
      <div className="floating-bones">
        <div className="bone">🦴</div>
        <div className="bone">💪</div>
        <div className="bone">🦴</div>
        <div className="bone">🦵</div>
        <div className="bone">🦴</div>
        <div className="bone">💪</div>
        <div className="bone">🦴</div>
        <div className="bone">🦵</div>
        <div className="bone">🦴</div>
        <div className="bone">💪</div>
      </div>

      {showInstall && <InstallPrompt onDismiss={handleInstallDismiss} />}
      
      {gameState === 'category' && (
        <CategorySelect onSelect={handleCategorySelect} />
      )}
      
      {gameState === 'setup' && (
        <PlayerSetup 
          onStart={handleStartGame} 
          onBack={handleBackToCategory}
        />
      )}
      
      {gameState === 'game' && (
        <GameScreen 
          key={gameKey}
          players={players} 
          category={category}
          onPlayAgain={handlePlayAgain}
          onNewGame={handleNewGame}
          persistentScores={persistentScores}
        />
      )}

      {gameState !== 'game' && (
        <div className="app-footer">
          <span className="footer-label">Developed by: </span>
          <a href="https://www.instagram.com/elfox.photographer" target="_blank" rel="noopener noreferrer">
            Ibrahim Assar
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
