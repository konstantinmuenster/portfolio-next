import type { ReactElement, ReactNode } from 'react';

import { styled, darkTheme, globalCss, CSS } from '@config/stitches.config';

const codeBlockPadding: CSS = {
  px: '1rem',

  '@lg': {
    width: '110%',
    marginLeft: '-5%',
  },
};

const injectCodeTitleStyle = globalCss({
  '.rehype-code-title': {
    ...codeBlockPadding,
    position: 'relative',
    zIndex: 2,
    py: '0.5rem',
    fontFamily: '$mono',
    fontSize: '0.875rem',
    lineHeight: '1.5rem',
    marginTop: '2.5rem',
    marginBottom: '-2.5rem',
    color: darkTheme.colors.text.value,
    background: darkTheme.colors.secondary100.value,
    border: `2px solid ${darkTheme.colors.secondary100.value}`,
    borderTopLeftRadius: '$default',
    borderTopRightRadius: '$default',
  },
});

const StyledPre = styled('pre', {
  ...codeBlockPadding,
  overflowX: 'auto',
  py: '1rem',
  my: '2rem',
  background: darkTheme.colors.secondary50.value,
  border: `2px solid ${darkTheme.colors.secondary100.value}`,
  borderRadius: '$default',

  'code[class*="language-"], pre[class*="language-"]': {
    color: '#f8f8f2',
    background: 'none',
    fontSize: '0.875rem',
    lineHeight: '1.5rem',
    fontFamily: '$mono',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    MozTabSize: '4',
    OTabSize: '4',
    tabSize: 4,
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
  },
  'pre[class*="language-"]': {
    padding: '1em',
    margin: '.5em 0',
    overflow: 'auto',
    borderRadius: '0.3em',
  },
  ':not(pre) > code[class*="language-"], pre[class*="language-"]': {
    background: '#282a36',
  },
  ':not(pre) > code[class*="language-"]': {
    padding: '.1em',
    borderRadius: '.3em',
    whiteSpace: 'normal',
  },
  '.token.comment, .token.prolog, .token.doctype, .token.cdata': {
    color: '#8495c6',
  },
  '.token.punctuation': { color: '#f8f8f2' },
  '.namespace': { opacity: 0.7 },
  '.token.property, .token.tag, .token.constant, .token.symbol, .token.deleted':
    {
      color: '#ff79c6',
    },
  '.token.boolean, .token.number': { color: '#bd93f9' },
  '.token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted':
    {
      color: '#50fa7b',
    },
  '.token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string, .token.variable':
    {
      color: '#f8f8f2',
    },
  '.token.atrule, .token.attr-value, .token.function, .token.class-name': {
    color: '#f1fa8c',
  },
  '.token.keyword': { color: '#8be9fd' },
  '.token.regex, .token.important': { color: '#ffb86c' },
  '.token.important, .token.bold': { fontWeight: 'bold' },
  '.token.italic': { fontStyle: 'italic' },
  '.token.entity': { cursor: 'help' },

  '.code-highlight': { cssFloat: 'left', minWidth: '100%' },
  '.code-line': {
    display: 'block',
    paddingLeft: '16px',
    paddingRight: '16px',
    marginLeft: '-16px',
    marginRight: '-16px',
    borderLeftWidth: '4px',
    borderLeftColor: 'rgba(31, 41, 55, 0)',
  },
  '.code-line.inserted': { backgroundColor: 'rgba(16, 185, 129, 0.2)' },
  '.code-line.deleted': { backgroundColor: 'rgba(239, 68, 68, 0.2)' },
  '.highlight-line': {
    marginLeft: '-16px',
    marginRight: '-16px',
    backgroundColor: 'rgba(55, 65, 81, 0.5)',
    borderLeftWidth: '4px',
    borderLeftColor: 'rgb(59, 130, 246)',
  },
  '.line-number::before': {
    display: 'inline-block',
    width: '1rem',
    textAlign: 'right',
    marginRight: '16px',
    marginLeft: '-8px',
    color: 'rgb(156, 163, 175)',
    content: 'attr(line)',
  },
});

type PreProps = {
  children?: ReactNode;
};

export const Pre = (props: PreProps): ReactElement => {
  // Inject as global css as the title lives outside the pre tag
  injectCodeTitleStyle();

  return <StyledPre>{props.children}</StyledPre>;
};
