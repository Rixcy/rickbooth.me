import '../styles/globals.css'
import '@dracula/dracula-ui/styles/dracula-ui.css'

import type { AppProps } from 'next/app'

function App(props: AppProps) {
  const { Component, pageProps } = props
  return <Component {...pageProps} />
}

export default App
