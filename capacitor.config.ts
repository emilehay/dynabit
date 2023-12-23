import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.emilehay.dynabit',
  appName: 'dynabit',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
