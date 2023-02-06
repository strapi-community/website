import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import AppLayouut from '@/layouts/AppLayouut'
export default function App({ Component, pageProps }: AppProps) {
  return <AppLayouut>
    <Component {...pageProps} />
  </AppLayouut>
}
