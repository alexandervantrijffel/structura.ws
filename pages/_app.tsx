import Head from 'next/head'
import { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import xw from 'xwind'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Tailwindcss Emotion Example</title>
      </Head>
      <Global
        //tailwind base styles + keyframes + ring and shadow classes variables  ... to global styles
        styles={xw`XWIND_BASE XWIND_GLOBAL`}
      />
      <Component {...pageProps} />
    </>
  )
}
