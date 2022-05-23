import type { ComponentPropsWithoutRef, ReactElement } from 'react';

import { styled } from '@config/stitches.config';

const StyledPreview = styled('div', {
  position: 'relative',
  padding: '1rem',
  backgroundColor: '$background',
  borderRadius: '$default',
  border: '2px solid $surface100',
  transition: 'all 1s ease',

  '@lg': { width: '46rem', marginLeft: 'calc((46rem - 42rem) * -1 / 2)' },

  '&:hover': { borderColor: '$primary50' },

  '&:after': {
    content: 'Preview',
    position: 'absolute',
    top: 1,
    right: 1,
    background: '$surface100',
    padding: '0.25rem 0.5rem',
    borderBottomLeftRadius: '$default',
    borderTopRightRadius: '$less',
    fontSize: '$mini',
    fontWeight: 500,
    lineHeight: '$mini',
    textTransform: 'uppercase',
  },
});

export const Preview = (
  props: ComponentPropsWithoutRef<'div'>
): ReactElement => {
  return <StyledPreview data-preview {...props} />;
};
