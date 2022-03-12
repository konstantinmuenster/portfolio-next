import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';

const isDarkThemeColorKey = (
  key: string
): key is keyof typeof darkTheme.colors => {
  return Object.keys(darkTheme.colors).includes(key);
};

export const {
  styled,
  css,
  theme,
  createTheme,
  getCssText,
  globalCss,
  keyframes,
  config,
} = createStitches({
  theme: {
    fonts: {
      sans: '"IBM Plex Sans", sans-serif',
      serif: '"Bree Serif", serif',
      mono: '"IBM Plex Mono", monospace',
    },
    colors: {
      primary: '#5F89C8',
      primaryLight: '#D7E2F3',
      secondary: '#F0EBE4',
      background: '#F8F8F8',
      surface250: '#F2F2EE',
      surface500: '#EAEAEA',
      surface750: '#E3E3DA',
      text: '#2A2A2D',
      subtext: '#707172',
      grey: '#888F96',
      borderGradient: 'linear-gradient(#E44873 50%, #613FE6 50%)',
    },
    radii: {
      default: '8px',
      round: '9999px',
    },
    fontSizes: {},
    space: {},
    sizes: {},
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    borderWidths: {},
    borderStyles: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  media: {
    bp1: '(min-width: 480px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
    bp4: '(min-width: 1200px)',
    motion: '(prefers-reduced-motion)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  },
});

export type CSS = Stitches.CSS<typeof config>;

export const darkTheme = createTheme('dark-theme', {
  colors: {
    primary: '#5F89C8',
    primaryLight: '#D7E2F3',
    secondary: '#F0EBE4',
    background: '#121212',
    surface: '#1E1E1E',
    text: '#D2D5DA',
    subtext: '#888F96',
  },
});

export const applyGlobalStyles = globalCss({
  '*': { boxSizing: 'border-box' },

  'html, body': {
    height: '100%',
    width: '100%',
    whiteSpace: 'pre-wrap',
    scrollBehavior: 'smooth',
    '@motion': {
      scrollBehavior: 'auto',
    },
  },

  '#__next': {
    minHeight: '100%',
    display: 'grid',
    gridTemplateColumns: '100%',
    gridTemplateRows: 'auto 1fr auto',
  },

  body: {
    fontFamily: '$sans',
    color: '$text',
  },

  a: {
    fontSize: '1rem',
    fontWeight: 'bold',
    lineHeight: 'inherit',
    textDecoration: 'none',
    color: '$subtext',
  },

  strong: {
    fontWeight: 'bold',
  },

  p: {
    fontSize: '1rem',
    fontWeight: 'normal',
    lineHeight: '1.75rem',
  },

  h1: {
    fontFamily: '$serif',
    fontSize: '2.25rem',
    lineHeight: '2.625rem',
    letterSpacing: '-1px',
  },

  h2: {
    fontFamily: '$serif',
    fontSize: '2rem',
    lineHeight: '2.375rem',
  },

  h3: {
    fontFamily: '$sans',
    fontSize: '1.5rem',
    lineHeight: '2rem',
    fontWeight: 'bold',
  },

  h4: {
    fontFamily: '$sans',
    fontSize: '1.125rem',
    lineHeight: '1.75rem',
    fontWeight: 'bold',
  },

  h5: {
    fontFamily: '$sans',
    fontSize: '1rem',
    lineHeight: '1.75rem',
    fontWeight: 'bold',
  },

  '.caption': {
    fontSize: '0.875rem',
    lineHeight: '1.125rem',
    color: '$subtext',
  },

  // https://rude.im/blog/dark-theme-with-stitches-and-next-js#handling-the-fodt-flash-of-default-theme
  '@dark': {
    ':root:not(.default-theme)': {
      ...Object.keys(darkTheme.colors).reduce((varSet, currentColorKey) => {
        if (!isDarkThemeColorKey(currentColorKey)) return { ...varSet };
        const currentColor = darkTheme.colors[currentColorKey];
        const currentColorValue =
          currentColor.value.substring(0, 1) === '$'
            ? `$colors${currentColor.value}`
            : currentColor.value;

        return {
          [currentColor.variable]: currentColorValue,
          ...varSet,
        };
      }, {}),
    },
  },
});
