import type { CSSProperties } from 'react';

import { styled, theme } from '@config/stitches.config';
import { generateColorPaletteVariants } from '@utils/generateColorPaletteVariants';

const StyledEmoji = styled('div', {
  transition: '0.6s ease-out',
  background: '$surface100',
  borderRadius: '$round',

  variants: {
    background: {
      ...generateColorPaletteVariants({
        backgroundColor: '$––color––',
      }),
    },
    size: {
      small: {
        fontSize: '1.125rem',
        lineHeight: '1.125rem',
        padding: '0.4rem',
      },
      big: {
        fontSize: '2.5rem',
        lineHeight: '2.5rem',
        padding: '0.625rem',
      },
    },
  },
});

type EmojiProps = {
  type: string;
  background?: keyof typeof theme.colors;
  className?: string;
  size?: 'small' | 'big';
  style?: CSSProperties;
};

export const Emoji: React.FC<EmojiProps> = props => {
  return (
    <StyledEmoji
      background={props.background ?? 'secondary50'}
      size={props.size ?? 'big'}
      className={props.className}
      style={props.style}
      data-emoji
    >
      <span>{props.type}</span>
    </StyledEmoji>
  );
};
