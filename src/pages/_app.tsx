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
        <title>Rick Booth - Software Developer</title>
        <meta
          name="description"
          content="Software Developer from Skipton specialising in Web Development using modern technologies such as React and TypeScript."
        />
        <meta property="og:title" content="Rick Booth - Software Developer" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://github.com/Rixcy.png" />
        <meta property="og:locale" content="en_GB" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
