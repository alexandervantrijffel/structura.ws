import Head from 'next/head'
import { AppProps } from 'next/app'
import { GlobalStyles } from 'twin.macro'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Tailwindcss Emotion Example</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
