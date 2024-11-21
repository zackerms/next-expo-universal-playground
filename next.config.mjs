import { withExpo } from '@expo/next-adapter';
import { withTamagui as tamagui } from '@tamagui/next-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  transpilePackages: [
    'react-native',
    'expo',
    // Add more React Native / Expo packages here...
  ]
};

const withTamagui = tamagui({
  config: "./tamagui.config.ts",
  components: ["tamagui"],
});

export default withExpo(withTamagui(nextConfig));