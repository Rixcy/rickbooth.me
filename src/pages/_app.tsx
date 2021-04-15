import '@dracula/dracula-ui/styles/dracula-ui.css'
import '../styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Layout } from 'components/Layout'

function App(props: AppProps) {
  const { Component, pageProps } = props
  return (
    <>
      <Head>
        <title>rickbooth.me</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
