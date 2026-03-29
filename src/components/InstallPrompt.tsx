import { useState } from 'react';
import './InstallPrompt.css';

interface InstallPromptProps {
  onDismiss: () => void;
}

const InstallPrompt = ({ onDismiss }: InstallPromptProps) => {
  const [isVisible, setIsVisible] = useState(true); // Always show

  const handleInstall = async () => {
    // Direct download link for APK from Google Drive
    window.open('https://download1980.mediafire.com/q3axapm8dergs5i2hcS-NjQtlkWETyv6I59uSkBfp7XlwjvNQpweHavO2xtsBs_aO5RpHwv4zxkJo-kDxI_xugZ9_PIvV2LocBXnjuPrYK0P4mJWaqLAyy1o6RtY4kW9kt-zGrcgFt8AWJZ_1Cn2iqaNIy-e6bMIIAZXJJl_j1Cn/nsyvfuc56316rbe/PhysioSUS.apk', '_blank');
    
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
