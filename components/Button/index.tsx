import { MouseEventHandler, FC } from 'react';

import { styled, theme } from '@config/stitches.config';
import { Link, LinkProps } from '@components/Link';
import { generateColorPaletteVariants } from '@utils/generateColorPaletteVariants';

const BaseButton = (as: 'button' | FC<LinkProps>) =>
  styled(as, {
    position: 'relative',
    display: 'block',
    fontWeight: 500,
    fontSize: '$default',
    lineHeight: '$default',
    color: '$text',
    py: '0.5rem',
    px: '1rem',
    width: 'auto',
    minWidth: '180px',
    backgroundColor: '$secondary50',
    borderRadius: '$default',
    transition: '$default',
    cursor: 'pointer',

    '&:not(:disabled):hover': {
      boxShadow: 'inset 0 -44px 0 0 $colors$primary50',
    },

    '&:disabled': {
      filter: 'brightness(95%)',
      cursor: 'not-allowed',
    },

    variants: {
      bgColor: {
        ...generateColorPaletteVariants({ backgroundColor: '$––color––' }),
      },
      bgHoverColor: {
        ...generateColorPaletteVariants({
          '&:not(:disabled):hover': {
            boxShadow: 'inset 0 -44px 0 0 $colors$$––color––',
          },
        }),
      },
    },
  });

type ButtonType = 'button' | 'link';

type ButtonProps = {
  as?: ButtonType;
  to?: string;
  onClick?: MouseEventHandler;
  colors?: {
    bg?: keyof typeof theme.colors;
    bgHover?: keyof typeof theme.colors;
  };
};

export const Button: React.FC<ButtonProps> = props => {
  let type = props.as ?? 'button';
  let isDisabled = false;

  if (type === 'link' && !props.to) {
    console.warn('No href for a/button provided.');
    type = 'button';
  }

  if (type === 'button' && !props.onClick) {
    console.warn('No onClick handler for button provided.');
    isDisabled = true;
  }

  const Button = BaseButton(type === 'link' ? Link : 'button');

  return type === 'link' ? (
    <Button
      to={props.to}
      bgColor={props.colors?.bg}
      bgHoverColor={props.colors?.bgHover}
      disabled={isDisabled}
    >
      {props.children}
    </Button>
  ) : (
    <Button
      onClick={props.onClick}
      disabled={isDisabled}
      bgColor={props.colors?.bg}
      bgHoverColor={props.colors?.bgHover}
    >
      {props.children}
    </Button>
  );
};
