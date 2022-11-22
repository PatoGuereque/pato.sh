import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import CssBaseline from '@mui/joy/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../helpers/createEmotionCache';
import { CssVarsProvider } from '@mui/joy';
import theme from '../config/theme';
import Layout from '../components/Layout';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CssVarsProvider theme={theme} defaultMode="system">
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CssVarsProvider>
    </CacheProvider>
  );
};

export default MyApp;
