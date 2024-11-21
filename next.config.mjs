import { withTamagui as tamagui } from '@tamagui/next-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
};

const withTamagui = tamagui({
  config: "./tamagui.config.ts",
  components: ["tamagui"],
});

export default withTamagui(nextConfig);