import { useState, useEffect } from 'react';
import './InstallPrompt.css';

interface InstallPromptProps {
  onDismiss: () => void;
}

const InstallPrompt = ({ onDismiss }: InstallPromptProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on Android browser (not iOS, not desktop, not APK)
    const isAndroid = /Android/i.test(navigator.userAgent);
    const isInBrowser = !window.matchMedia('(display-mode: standalone)').matches && 
                        !(navigator as any).standalone;
    
    if (isAndroid && isInBrowser) {
      setIsVisible(true);
    }
  }, []);

  const handleInstall = async () => {
    // Direct download link for APK from Google Drive
    window.open('https://drive.google.com/file/d/1bh_dinmtnylN1x0GQU4k1DEfidQR4abV/view?usp=sharing', '_blank');
    
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
