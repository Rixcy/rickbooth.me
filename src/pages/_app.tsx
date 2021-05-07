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
          content="Rick Booth is a Software
            Developer from Skipton, England. He specialises in front end web
            development using modern technologies such as React and TypeScript"
        />

        {/*  Open graph data  */}
        <meta property="og:title" content="Rick Booth - Software Developer" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://github.com/Rixcy.png" />
        <meta property="og:locale" content="en_GB" />
        <meta
          property="og:description"
          content="Rick Booth is a Software
            Developer from Skipton, England. He specialises in front end web
            development using modern technologies such as React and TypeScript"
        />

        {/*  Twitter  */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Rick Booth - Software
          Developer"
        />
        <meta name="twitter:url" content="https://rickbooth.me" />
        <meta name="twitter:image" content="https://github.com/Rixcy.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
