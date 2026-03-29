import { useState } from 'react';
import './InstallPrompt.css';

interface InstallPromptProps {
  onDismiss: () => void;
}

const InstallPrompt = ({ onDismiss }: InstallPromptProps) => {
  const [isVisible, setIsVisible] = useState(true); // Always show

  const handleInstall = async () => {
    // Direct download link for APK
    window.open('https://your-domain.com/physio-sus.apk', '_blank');
    
    setIsVisible(false);
    onDismiss();
  };

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss();
  };

  if (!isVisible) return null;

  return (
    <div className="install-floating">
      <button className="install-close" onClick={handleDismiss}>×</button>
      <div className="install-content">
        <div className="install-icon">
          <img src="/app-icon.jpg" alt="Physio SOS" style={{ width: '40px', height: '40px', borderRadius: '8px' }} />
        </div>
        <div className="install-text">
          <h3>Install App</h3>
          <p>Play PHYSIO SUS OFFLINE</p>
        </div>
        <button className="install-btn" onClick={handleInstall}>
          Install
        </button>
      </div>
    </div>
  );
};

export default InstallPrompt;
