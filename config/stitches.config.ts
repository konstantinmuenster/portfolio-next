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
      mono: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace',
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
      secondary50: '#EDEDE7',
      secondary100: '#E3E3DA',
      secondary250: '#D4D4C7',
      secondary500: '#838374',
      secondary900: '#1A1A14',
      primary50: '#DDD6FA',
      primary100: '#9A84F0',
      primary250: '#6240E7',
      primary500: '#522EE5',
      primary900: '#1C0C5E',
      accentGradient: 'linear-gradient(#E54974 50%, #613FE6 50%)',
      turquoise: '#e8f0f8',
      pinky: '#E54974',
      violet: '#613FE6',
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
    lineHeights: {
      mini: '1rem',
      small: '1.5rem',
      default: '1.75rem',
      big: '2rem',
    },
    sizes: {},
    fontWeights: {},
    letterSpacings: {},
    borderWidths: {},
    borderStyles: {},
    shadows: {},
    zIndices: {},
    transitions: {
      default: 'all .2s ease',
    },
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
    size: (value: string | number) => ({
      width: value,
      height: value,
    }),
    linearGradient: (value: string) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
    accentBorderWithBg: (bgColor: string) => ({
      border: '2px solid transparent',
      background: `linear-gradient(${bgColor}, ${bgColor}) padding-box, linear-gradient($pinky 50%, $violet 50%) border-box`,
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
        transition: '$default',
        background: `${color}`,
      },
      '&:hover:before': {
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
    gridTemplateRows: '1fr auto',
  },

  body: {
    fontFamily: '$sans',
    color: '$text',
  },

  a: {
    fontWeight: 500,
    lineHeight: 'inherit',
    textDecoration: 'none',
    color: '$subtext',
    '&:hover, &[aria-current="page"]': {
      color: '$text',
    },
    '&:not([data-hide-external-hint])[rel="nofollow noopener noreferrer"]': {
      position: 'relative',
      paddingRight: '18px',

      '&:after': {
        content: '',
        position: 'absolute',
        bottom: 2,
        right: 0,
        width: 14,
        height: 14,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 0.699662C8 0.522936 7.9298 0.353449 7.80483 0.228485C7.67987 0.103521 7.51038 0.0333174 7.33366 0.0333174L2.0029 0C1.82617 0 1.65668 0.0702041 1.53172 0.195168C1.40676 0.320132 1.33655 0.489619 1.33655 0.666345C1.33655 0.84307 1.40676 1.01256 1.53172 1.13752C1.65668 1.26249 1.82617 1.33269 2.0029 1.33269H5.70777L0.197104 6.85669C0.134648 6.91863 0.0850761 6.99233 0.0512467 7.07353C0.0174172 7.15473 0 7.24183 0 7.32979C0 7.41776 0.0174172 7.50485 0.0512467 7.58605C0.0850761 7.66725 0.134648 7.74095 0.197104 7.8029C0.259049 7.86535 0.332747 7.91492 0.413948 7.94875C0.495148 7.98258 0.582243 8 0.670208 8C0.758174 8 0.845269 7.98258 0.926469 7.94875C1.00767 7.91492 1.08137 7.86535 1.14331 7.8029L6.66731 2.2789V5.9971C6.66731 6.17383 6.73751 6.34332 6.86248 6.46828C6.98744 6.59324 7.15693 6.66345 7.33366 6.66345C7.51038 6.66345 7.67987 6.59324 7.80483 6.46828C7.9298 6.34332 8 6.17383 8 5.9971V0.699662Z' fill='%23707172'/%3E%3C/svg%3E%0A")`,
        backgroundRepeat: 'no-repeat',
      },
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
    textAlign: 'left',
  },

  ':focus': {
    outline: '2px solid $text',
    outlineOffset: '.2rem',
    borderRadius: '$less',
  },

  ':focus:not(:focus-visible)': {
    outline: 'none',
  },

  '.js-focus-visible :focus:not(.focus-visible)': {
    outline: 0,
  },

  strong: {
    fontWeight: 500,
  },

  em: {
    fontStyle: 'italic',
  },

  b: {
    fontWeight: 500,
  },

  figcaption: {
    marginTop: '0.5rem',
    width: '100%',
    height: 'auto',
    color: '$subtext',
    lineHeight: '$small',
    fontSize: '$small',
    textAlign: 'center',
  },

  'code:not(.code-highlight)': {
    display: 'inline-block',
    whiteSpace: 'nowrap',
    borderRadius: '$less',
    backgroundColor: '$primary50',
    color: '$text',
    padding: '0.25rem',
    fontFamily: '$mono',
    fontSize: '90%',
    lineHeight: '90%',
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
    fontFamily: '$sans',
    fontWeight: 500,
    fontSize: '1.5rem',
    lineHeight: '2rem',
  },

  h5: {
    fontFamily: '$sans',
    fontWeight: 500,
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
  },

  blockquote: {
    paddingLeft: '1rem',
    borderLeft: '4px solid $secondary100',
  },

  '::selection': {
    color: '$text',
    background: '$secondary100',
  },

  '::-moz-selection': {
    color: '$text',
    background: '$secondary100',
  },

  'ol, ul': {
    paddingLeft: '1rem',
    my: '-1rem',
    'li::marker': { color: '$primary250' },
  },

  ul: { listStyleType: 'circle' },

  ol: { listStyleType: 'auto' },

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

  hr: {
    border: '1px solid $surface100',
    my: '2rem',
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

export const wavingAnimation = keyframes({
  '0%': { transform: 'rotate(0.0deg)' },
  '10%': { transform: 'rotate(14.0deg)' },
  '20%': { transform: 'rotate(-8.0deg)' },
  '30%': { transform: 'rotate(14.0deg)' },
  '40%': { transform: 'rotate(-4.0deg)' },
  '50%': { transform: 'rotate(10.0deg)' },
  '60%': { transform: 'rotate(0.0deg)' },
  '100%': { transform: 'rotate(0.0deg)' },
});
