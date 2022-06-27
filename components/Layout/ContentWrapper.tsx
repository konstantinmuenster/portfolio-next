import { styled } from '@config/stitches.config';
import { HEADER_HEIGHT } from '@components/Header';

export const ContentWrapper = styled('div', {
  width: '100%',
  maxWidth: '52rem',
  margin: '0 auto',
  px: '$pagePadding',
});

export const LegalContentWrapper = styled('div', {
  width: '100%',
  maxWidth: '52rem',
  margin: '0 auto',
  px: '$pagePadding',
  paddingTop: `calc(${HEADER_HEIGHT}px + 4rem)`,
  paddingBottom: '10rem',

  hr: { my: '4rem' },
  h1: { color: '$primary900', marginBottom: '2rem' },
  p: {
    color: '$subtext',
    marginBottom: '0.5rem',
    maxWidth: '37.5rem',
    '> strong': { display: 'block', marginTop: '2rem' },
  },
});
