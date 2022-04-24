import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';
import { reset } from 'stitches-reset';

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
      background: '#FFFFFF',
      text: '#2A2A2D',
      subtext: '#707172',
      border: '#212121',
      surface50: '#F8F8F8',
      surface100: '#EAEAEA',
      surface250: '#DADADA',
      surface500: '#B8B8B8',
      secondary50: '#F2F2EE',
      secondary100: '#E3E3DA',
      secondary250: '#D4D4C7',
      secondary500: '#838374',
      secondary900: '#1A1A14',
      primary50: '#DDD6FA',
      primary100: '#9A84F0',
      primary250: '#6240E7',
      primary500: '#522EE5',
      primary900: '#1C0C5E',
      accentGradient: 'linear-gradient(#E44873 50%, #613FE6 50%)',
      turquoise: '#E8EBEF',
    },
    radii: {
      less: '4px',
      default: '8px',
      round: '9999px',
    },
    space: {
      pagePadding: '1rem',
    },
    fontSizes: {
      mini: '0.75rem',
      small: '0.875rem',
      default: '1rem',
      big: '1.125rem',
    },
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
    hoverBg: (color: string) => ({
      position: 'relative',

      '&:before': {
        content: '',
        transform: 'scale(.7) perspective(1px)',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
        display: 'block',
        height: '100%',
        width: '100%',
        borderRadius: '$less',
        opacity: 0,
        transition: 'all .2s ease',
        background: `${color}`,
      },
      '&:hover:before,  &:focus-visible:before, &:active:before': {
        transform: 'scale(1) perspective(1px)',
        opacity: 1,
      },
    }),
  },
});

export type CSS = Stitches.CSS<typeof config>;

export const darkTheme = createTheme('dark-theme', {
  colors: {
    background: '#141415',
    text: '#EAECEF',
    subtext: '#888F96',
    border: '#3F4041',
    surface50: '#18181A',
    surface100: '#28282C',
    surface250: '#38383D',
    surface500: '#38383D',
    secondary50: '#1B1822',
    secondary100: '#262331',
    secondary250: '#353044',
    secondary500: '#8C87A3',
    secondary900: '#B7B2C9',
    primary50: '#31255F',
    primary100: '#4F3C9C',
    primary250: '#8776CA',
    primary500: '#CAC2E7',
    primary900: '#F2F2EE',
  },
});

export const applyGlobalStyles = globalCss({
  ...reset,

  '@font-face': [
    {
      fontFamily: 'Bree Serif',
      fontWeight: 400,
      fontStyle: 'normal',
      fontDisplay: 'swap',
      src: 'local("Bree Serif"), url("/fonts/BreeSerifLight.woff2"), url("/fonts/BreeSerifLight.woff2")',
    },
    {
      fontFamily: 'Bree Serif',
      fontWeight: 500,
      fontStyle: 'normal',
      fontDisplay: 'swap',
      src: 'local("Bree Serif"), url("/fonts/BreeSerifRegular.woff2"), url("/fonts/BreeSerifRegular.woff2")',
    },
  ],

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
    fontWeight: 500,
  },

  b: {
    fontWeight: 500,
  },

  p: {
    fontSize: '$default',
    fontWeight: 'normal',
    lineHeight: '1.75rem',
  },

  h1: {
    fontFamily: '$serif',
    fontWeight: 400,
    fontSize: '2.5rem',
    lineHeight: '3rem',
  },

  h2: {
    fontFamily: '$serif',
    fontWeight: 400,
    fontSize: '2.25rem',
    lineHeight: '2.75rem',
  },

  h3: {
    fontFamily: '$serif',
    fontWeight: 400,
    fontSize: '2rem',
    lineHeight: '2.5rem',
  },

  h4: {
    fontFamily: '$serif',
    fontWeight: 400,
    fontSize: '1.75rem',
    lineHeight: '2.25rem',
  },

  h5: {
    fontFamily: '$serif',
    fontWeight: 400,
    fontSize: '1.5rem',
    lineHeight: '2rem',
  },

  '::selection': {
    color: '$text',
    background: '$secondary100',
  },

  '::-moz-selection': {
    color: '$text',
    background: '$secondary100',
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
