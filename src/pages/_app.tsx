import '../styles/globals.css'
import '@dracula/dracula-ui/styles/dracula-ui.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'

function App(props: AppProps) {
  const { Component, pageProps } = props
  return (
    <>
      <Head>
        <title>rickbooth.me</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
