import type { ReactElement } from 'react';

import type { SinglePictureProps } from './Single';
import { styled } from '@config/stitches.config';
import { Picture } from '.';

const StyledBlogPicture = styled('div', {
  marginTop: '2rem',
  marginBottom: '3rem',

  figure: {
    width: '100%',
    height: '10rem',

    '@sm': { height: '20rem' },
    '@lg': {
      height: '23rem',
      width: '46rem',
      marginLeft: 'calc((46rem - 42rem) * -1 / 2)',
    },

    'img:hover': { borderColor: '$primary50 !important' },
  },
});

export const BlogPicture = (props: SinglePictureProps): ReactElement => {
  return (
    <StyledBlogPicture>
      <Picture {...props} />
    </StyledBlogPicture>
  );
};
