import Head from 'next/head'
import '../styles/globals.css'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

// import '@fontsource/noto-sans-thai'
import "@fontsource/noto-sans-thai"

// import "@fontsource/ibm-plex-sans-thai-looped"

import theme from '../theme'
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <title>ค้นหาคำไวพจน์</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta
            name="google-site-verification"
            content="6oKjH0Kg-1zb6tNcwvRzoFf-DmrFOxotFyrXH-lCcPE"
          />
          <meta
            name="description"
            content="ค้นหาคำไวพจน์ภาษาไทย | Thai synonym browser"
          />
          <link rel="shortcut icon" href="favicon.ico" />
          <link rel="apple-touch-icon" href="favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <link
            href="images/icons/icon-16x16.png"
            rel="icon"
            type="image/png"
            sizes="16x16"
          />
          <link
            href="images/icons/icon-32x32.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
          />
          <link
            href="images/icons/icon-144x144.png"
            rel="icon"
            type="image/png"
            sizes="144x144"
          />
          <link
            href="images/icons/icon-512x512.png"
            rel="icon"
            type="image/png"
            sizes="512x512"
          />

          <meta name="theme-color" content="#9F7AEA" />
          <meta property="og:image" content="images/og_image.png" />
          <meta property="og:title" content="Thai Synonym" />
          <meta
            property="og:description"
            content="ค้นหาคำไวพจน์ภาษาไทย | Thai synonym browser "
          />
        </Head>

        <Component {...pageProps} />
      </>
    </ChakraProvider>
  )
}
