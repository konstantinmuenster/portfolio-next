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
      less: '4px',
      default: '8px',
      round: '9999px',
    },
    space: {
      pagePadding: '1rem',
    },
    fontSizes: {},
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
    sm: '(min-width: 480px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1200px)',
    motion: '(prefers-reduced-motion)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  },
  utils: {
    mx: (value: string) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: string) => ({
      marginTop: value,
      marginBottom: value,
    }),
    px: (value: string) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: string) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    size: (value: string) => ({
      width: value,
      height: value,
    }),
    linearGradient: (value: string) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
  },
});

export type CSS = Stitches.CSS<typeof config>;

export const darkTheme = createTheme('dark-theme', {
  colors: {
    primary: '#5F89C8',
    primaryLight: '#D7E2F3',
    secondary: '#F0EBE4',
    background: '#121212',
    surface250: '#1E1E1E',
    surface500: '#1E1E1E',
    surface750: '#1E1E1E',
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
    fontSize: '1.125rem',
    fontWeight: 'bold',
    lineHeight: 'inherit',
    textDecoration: 'none',
    color: '$subtext',
    '&:hover, &[aria-current="page"]': {
      color: '$text',
    },
    '&:focus-visible': {
      outlineColor: '$text',
      color: '$text',
      borderRadius: '$less',
    },
  },

  button: {
    margin: 0,
    padding: 0,
    border: 'none',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    color: 'inherit',
    font: 'inherit',
    width: 'auto',
    overflow: 'visible',
    '&:focus-visible': {
      outlineColor: '$text',
      color: '$text',
      borderRadius: '$less',
    },
  },

  strong: {
    fontWeight: 'bold',
  },

  p: {
    fontSize: '1.125rem',
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
    fontSize: '1.125rem',
    lineHeight: '1.75rem',
    fontWeight: 'bold',
  },

  // https://gist.github.com/pepebe/1176777
  'ul.reset, ol.reset': {
    margin: '0',
    padding: '0',
    textIndent: '0',
    listStyleType: 'none',
    '& li, & ul li': {
      margin: '0',
      padding: '0',
      textIndent: '0',
      listStyleType: 'none',
    },
  },

  // https://www.a11yproject.com/posts/how-to-hide-content/#alternatives-to-display%3A-none
  '[hidden]': {
    display: 'none !important',
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
