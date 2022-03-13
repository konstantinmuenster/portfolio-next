import { theme } from '@config/stitches.config';

export const Favicon = () => {
  return (
    <>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="apple-mobile-web-app-title" content="konstantin" />
      <meta name="application-name" content="<APP NAME>" />
      <meta name="msapplication-TileColor" content="#ffc40d" />
      <meta name="theme-color" content={theme.colors.primary.value} />
    </>
  );
};
