import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import AppLayout from '@/layouts/AppLayout'
import Head from 'next/head'

import localFont from '@next/font/local'
export const poppins = localFont({
  src: [
    {
      path: './../fonts/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './../fonts/Poppins-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './../fonts/Poppins-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './../fonts/Poppins-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ]
})

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/strapi-.svg" />
    </Head>
    <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily}, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        }
      `}</style>

    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  </>
}
