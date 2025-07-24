import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'net.tiation.riggerhub.ios',
  appName: 'RiggerHub iOS',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      launchAutoHide: true,
      backgroundColor: "#16a34a",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: false,
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#ffffff",
      splashFullScreen: true,
      splashImmersive: true,
      layoutName: "launch_screen",
      useDialog: true,
    },
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"]
    },
    Haptics: {
      enabled: true
    },
    StatusBar: {
      style: "DARK"
    },
    Network: {
      enabled: true
    },
    Storage: {
      enabled: true
    },
    Camera: {
      enabled: true,
      permissions: ["camera", "photos"]
    },
    Geolocation: {
      enabled: true,
      permissions: ["location"]
    }
  },
  ios: {
    scheme: 'RiggerHub'
  }
};

export default config;
