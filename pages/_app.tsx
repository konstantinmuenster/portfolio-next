import 'normalize.css';
import '@fontsource/bree-serif';
import '@fontsource/ibm-plex-mono';
import '@fontsource/ibm-plex-sans';
import '@fontsource/ibm-plex-sans/700.css';

import type { AppProps } from 'next/app';

import { applyGlobalStyles } from '@config/stitches.config';
import { ThemeProvider } from '@components/ThemeProvider';

function MyApp({ Component, pageProps }: AppProps) {
  applyGlobalStyles();
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
