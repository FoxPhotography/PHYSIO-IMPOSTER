import { useState } from 'react';
import './PlayerSetup.css';

interface PlayerSetupProps {
  onStart: (players: string[]) => void;
  onBack: () => void;
}

const PlayerSetup = ({ onStart, onBack }: PlayerSetupProps) => {
  const [playerCount, setPlayerCount] = useState(4);
  const [playerNames, setPlayerNames] = useState<string[]>(['', '', '', '']);

  const handleCountChange = (delta: number) => {
    const newCount = Math.max(3, Math.min(12, playerCount + delta));
    setPlayerCount(newCount);
    
    const newNames = [...playerNames];
    if (newCount > playerNames.length) {
      for (let i = playerNames.length; i < newCount; i++) {
        newNames.push('');
      }
    } else {
      newNames.length = newCount;
    }
    setPlayerNames(newNames);
  };

  const handleNameChange = (index: number, value: string) => {
    const newNames = [...playerNames];
    newNames[index] = value;
    setPlayerNames(newNames);
  };

  const handleStart = () => {
    const filledNames = playerNames.map((name, i) => 
      name.trim() || `Player ${i + 1}`
    );
    onStart(filledNames);
  };

  return (
    <div className="setup-screen">
      <button className="btn-back" onClick={onBack}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15 18 9 12 15 6" />
        </svg>
        Back
      </button>

      <div className="setup-header">
        <h1>Player Setup</h1>
        <p>Set number of players and enter names</p>
      </div>

      <div className="player-counter">
        <button 
          className="btn-counter"
          onClick={() => handleCountChange(-1)}
          disabled={playerCount <= 3}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
        
        <div className="counter-display">
          <span className="counter-number">{playerCount}</span>
          <span className="counter-label">Players</span>
        </div>
        
        <button 
          className="btn-counter"
          onClick={() => handleCountChange(1)}
          disabled={playerCount >= 12}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
      </div>

      <div className="player-inputs">
        {playerNames.map((name, index) => (
          <input
            key={index}
            type="text"
            className="player-input"
            placeholder={`Player ${index + 1}`}
            value={name}
            onChange={(e) => handleNameChange(index, e.target.value)}
            maxLength={20}
          />
        ))}
      </div>

      <button className="btn-start" onClick={handleStart}>
        START GAME
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      </button>
    </div>
  );
};

export default PlayerSetup;
