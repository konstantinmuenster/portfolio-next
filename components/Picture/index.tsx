import Image from 'next/image';

import { styled } from '@config/stitches.config';
import { ComponentPropsWithoutRef } from 'react';
import { Emoji } from '@components/Emoji';

const StyledPicture = styled('div', {
  position: 'relative',

  '> [data-emoji]': {
    position: 'absolute',
    zIndex: 1,
    top: -10,
    left: -30,
  },

  img: {
    borderRadius: '$default',
  },
});

type PictureProps = {
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

export const Picture: React.FC<PictureProps> = ({
  src,
  alt,
  width,
  height,
  emoji,
  ...props
}) => {
  const isEmojiObject = typeof emoji !== 'string';

  return (
    <StyledPicture style={{ width, height }} {...props}>
      {emoji ? (
        <Emoji
          type={isEmojiObject ? emoji.type : emoji}
          style={emoji && isEmojiObject ? emoji.position : {}}
          background="surface100"
        />
      ) : undefined}
      <Image src={src} alt={alt} layout="fill" objectFit="cover" />
    </StyledPicture>
  );
};
