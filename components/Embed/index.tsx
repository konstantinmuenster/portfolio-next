import { ReactElement } from 'react';

import { styled } from '@config/stitches.config';

const StyledEmbed = styled('div', {
  marginTop: '2rem',
  width: '100%',

  '@lg': {
    width: '120%',
    marginLeft: '-10%',
  },

  iframe: {
    width: '100%',
    height: '10rem',
    '@sm': { height: '20rem' },
    '@lg': { height: '30rem' },
  },
});

type EmbedProps = {
  src: string;
};

export const Embed = (props: EmbedProps): ReactElement => {
  return (
    <StyledEmbed>
      <iframe src={props.src} />
    </StyledEmbed>
  );
};
