import { generateColorPaletteVariants } from '@utils/generateColorPaletteVariants';
import { styled, theme } from '@config/stitches.config';

import { Emoji } from '../Emoji';
import { Link } from '@components/Link';

export const StyledLinkedCardWrapper = styled('div', {
  a: {
    transition: '$default',

    position: 'relative',
    cursor: 'pointer',
    display: 'block',
    color: '$text',

    p: { color: '$subtext' },

    '&:hover, &:active, &:focus-visible': {
      filter: 'brightness(98%)',
      p: { filter: 'blur(0.5px)' },
      '[data-emoji]': { transform: 'rotateZ(720deg)' },
    },
  },
});

const StyledCard = styled('div', {
  position: 'relative',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  columnGap: '0.5rem',

  borderRadius: '$default',
  background: '$surface50',
  px: '1.5rem',
  py: '1.25rem',

  'h1, h2, h3, h4, h5': {
    marginBottom: '0.25rem',
  },

  p: {
    color: '$subtext',
    fontSize: '$small',
    lineHeight: '$small',
  },

  '[data-emoji]': {
    position: 'absolute',
    top: 10,
    right: 10,
  },

  variants: {
    background: {
      ...generateColorPaletteVariants({
        backgroundColor: '$––color––',
      }),
    },
  },
});

type CardProps = {
  emoji?: string;
  background?: keyof typeof theme.colors;
  backgroundEmoji?: keyof typeof theme.colors;
  to?: string;
};

export const Card: React.FC<CardProps> = props => {
  const Card = (
    <StyledCard background={props.background ?? 'surface50'}>
      <div className="content">{props.children}</div>
      {props.emoji ? (
        <Emoji
          type={props.emoji}
          background={props.backgroundEmoji ?? 'surface100'}
          size="small"
        />
      ) : undefined}
    </StyledCard>
  );

  return props.to ? (
    <StyledLinkedCardWrapper>
      <Link to={props.to}>{Card}</Link>
    </StyledLinkedCardWrapper>
  ) : (
    Card
  );
};
