import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CacheProvider } from '@emotion/react'
import createEmotionCache from '../src/createEmotionCache';
import Head from 'next/head';
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import AuthProvider from "../components/AuthProvider";

const clientSideEmotionCache = createEmotionCache()
const activeChainId= ChainId.Mumbai;

function MyApp({ Component, pageProps }: AppProps) {
  const { emotionCache = clientSideEmotionCache } = pageProps
  return <CacheProvider value={emotionCache} >
        <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="../public/favicon.ico" />
         </Head>
         
        <Component {...pageProps} />
       </CacheProvider>
}

export default MyApp
