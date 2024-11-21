import type { AppProps } from "next/app";
import { TamaguiProvider } from '@tamagui/core'
import config from '../../tamagui.config'

export default function App({ Component, pageProps }: AppProps) {
  return <TamaguiProvider config={config}>
    <Component {...pageProps} />
  </TamaguiProvider>
}