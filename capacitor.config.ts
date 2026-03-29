import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.physiosus.app',
  appName: 'Physio SUS',
  webDir: 'dist',
  android: {
    backgroundColor: '#0a0a0a',
    allowMixedContent: true
  }
};

export default config;
