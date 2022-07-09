import type { ReactElement } from 'react';

import type { SinglePictureProps } from './Single';
import { styled } from '@config/stitches.config';
import { Picture } from '.';

const StyledBlogPicture = styled('div', {
  marginTop: '2rem',
  marginBottom: '3rem',

  '.image-wrapper': {
    width: '100%',
    height: '10rem',

    '@sm': { height: '20rem' },
    '@lg': {
      height: '23rem',
      width: '110%',
      marginLeft: '-5%',
    },

    'img:hover': { borderColor: '$primary50 !important' },
  },
});

export const BlogPicture = (props: SinglePictureProps): ReactElement => {
  return (
    <StyledBlogPicture>
      <Picture {...props} objectFit="contain" />
    </StyledBlogPicture>
  );
};
