import { theme } from '@config/stitches.config';

export const Favicon: React.FC = () => {
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
      <link
        rel="mask-icon"
        href="/safari-pinned-tab.svg"
        color={theme.colors.primary500.value}
      />
      <meta
        name="msapplication-TileColor"
        content={theme.colors.primary500.value}
      />
      <meta name="theme-color" content={theme.colors.primary500.value} />
    </>
  );
};
