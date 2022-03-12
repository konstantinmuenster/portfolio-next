import 'normalize.css';
import '@fontsource/bree-serif';
import '@fontsource/ibm-plex-mono';
import '@fontsource/ibm-plex-sans';
import '@fontsource/ibm-plex-sans/700.css';

import type { AppProps } from 'next/app';

import { applyGlobalStyles } from '@config/stitches.config';
import { ThemeProvider } from '@components/ThemeProvider';
import { Layout } from '@components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  applyGlobalStyles();
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
