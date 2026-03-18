import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.revertguide.app",
  appName: "Revert Guide",
  webDir: "out",
  server: {
    androidScheme: "https",
  },
  plugins: {
    App: {
      // Handle hardware back button on Android
    },
  },
};

export default config;
