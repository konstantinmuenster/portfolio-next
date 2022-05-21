import type { ComponentPropsWithoutRef } from 'react';
import Image from 'next/image';

import { styled } from '@config/stitches.config';
import { Emoji } from '@components/Emoji';

const StyledSinglePicture = styled('div', {
  position: 'relative',

  '> [data-emoji]': {
    display: 'none',
    position: 'absolute',
    zIndex: 1,
    top: -10,
    left: -30,

    '@md': { display: 'block' },
  },

  img: {
    borderRadius: '$default',
  },
});

type SinglePictureProps = {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  emoji?:
    | string
    | {
        type: string;
        position?: { top?: number; left?: number };
      };
} & ComponentPropsWithoutRef<'div'>;

export const SinglePicture: React.FC<SinglePictureProps> = ({
  src,
  alt,
  width,
  height,
  emoji,
  ...props
}) => {
  const isEmojiObject = typeof emoji !== 'string';

  return (
    <StyledSinglePicture style={{ width, height }} {...props}>
      {emoji ? (
        <Emoji
          type={isEmojiObject ? emoji.type : emoji}
          style={emoji && isEmojiObject ? emoji.position : {}}
          background="surface100"
        />
      ) : undefined}
      <Image src={src} alt={alt} layout="fill" objectFit="cover" />
    </StyledSinglePicture>
  );
};
