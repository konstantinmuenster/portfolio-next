import '@fontsource/jetbrains-mono';
import '@fontsource/ibm-plex-sans';
import '@fontsource/ibm-plex-sans/500.css';

import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

import { applyGlobalStyles } from '@config/stitches.config';
import { defaultSeoProps } from '@config/seo.config';
import { ThemeProvider } from '@components/ThemeProvider';
import { PageLayout } from '@components/Layout';

type PageProps = {
  renderWithoutLayout?: boolean;
};

function MyApp({ Component, pageProps }: AppProps<PageProps>) {
  applyGlobalStyles();

  if (Component.defaultProps?.renderWithoutLayout)
    return (
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    );

  return (
    <ThemeProvider>
      <PageLayout>
        <DefaultSeo {...defaultSeoProps} />
        <Component {...pageProps} />
      </PageLayout>
    </ThemeProvider>
  );
}

export default MyApp;
