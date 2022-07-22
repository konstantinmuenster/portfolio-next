import { generateColorPaletteVariants } from '@utils/generateColorPaletteVariants';
import { styled, theme } from '@config/stitches.config';

import { Emoji } from '../Emoji';
import { Link } from '@components/Link';

export const StyledLinkedBaseCardWrapper = styled('div', {
  a: {
    transition: '$default',

    position: 'relative',
    cursor: 'pointer',
    display: 'block',
    color: '$text',

    p: { color: '$subtext' },

    '&:hover': {
      filter: 'brightness(98%)',
      transform: 'scale(0.995)',
      '[data-emoji]': { transform: 'rotateZ(720deg)' },
    },
  },
});

const StyledBaseCard = styled('div', {
  position: 'relative',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  columnGap: '0.5rem',

  borderRadius: '$default',
  border: '1px solid $surface100',
  background: '$surface50',
  px: '1.5rem',
  py: '1.25rem',

  'h1, h2, h3, h4, h5': {
    fontFamily: '$serif',
    fontWeight: 400,
    marginBottom: '0.5rem',
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

type BaseCardProps = {
  emoji?: string;
  background?: keyof typeof theme.colors;
  backgroundEmoji?: keyof typeof theme.colors;
  to?: string;
};

export const BaseCard: React.FC<BaseCardProps> = props => {
  const BaseCard = (
    <StyledBaseCard background={props.background ?? 'surface50'}>
      <div className="content">{props.children}</div>
      {props.emoji ? (
        <Emoji
          type={props.emoji}
          background={props.backgroundEmoji ?? 'surface100'}
          size="small"
        />
      ) : undefined}
    </StyledBaseCard>
  );

  return props.to ? (
    <StyledLinkedBaseCardWrapper>
      <Link to={props.to}>{BaseCard}</Link>
    </StyledLinkedBaseCardWrapper>
  ) : (
    BaseCard
  );
};
