import { useEffect } from 'react';
import { Menu } from '@headlessui/react';

import { styled } from '@config/stitches.config';
import { VisuallyHidden } from '@components/VisuallyHidden';

const SIZE = 28;
const PADDING = 10;

export const BUTTON_SIZE = PADDING + SIZE + PADDING;

const StyledHamburgerButton = styled('div', {
  size: `${BUTTON_SIZE}px`,
  padding: `${PADDING}px`,
  borderRadius: '$less',

  display: 'flex',
  alignItems: 'center',

  background: 'transparent',

  '&:hover': {
    background: '$surface50',
    '> div:after, > div:before': { background: '$primary900' },
  },

  '&[data-open="true"] > div:after': { background: '$primary900' },

  div: {
    position: 'relative',
    width: `${SIZE}px`,
    height: '3px',
    background: 'transparent',
    borderRadius: '$less',
    transitionProperty: 'all',
    transitionDuration: '220ms',
    transitionTimingFunction: 'cubic-bezier(.55,.055,.675,.19)',

    '&:before, &:after': {
      content: '',
      background: '$subtext',
      borderRadius: '$less',
      position: 'absolute',
      width: `${SIZE}px`,
      height: '3px',
    },

    '&:before': {
      top: '-6px',
      transition: 'top .1s ease-in .25s,opacity .1s ease-in',
    },

    '&:after': {
      bottom: '-6px',
      transition:
        'bottom .1s ease-in .25s,transform .22s cubic-bezier(.55,.055,.675,.19)',
    },
  },

  '&[data-open="true"] div': {
    background: '$primary900',

    transitionTimingFunction: 'cubic-bezier(.215,.61,.355,1)',
    transform: 'rotate(225deg)',
    transitionDelay: '120ms',

    '&:before': {
      top: 0,
      opacity: 0,
      transition: 'top 100ms ease-out,opacity 100ms ease-out 120ms',
    },

    '&:after': {
      bottom: 0,
      transform: 'rotate(-90deg)',
      transition:
        'bottom 100ms ease-out,transform 220ms cubic-bezier(.215,.61,.355,1) 120ms',
    },
  },
});

export const HamburgerButton: React.FC<{ open: boolean }> = props => {
  const { open } = props;

  useEffect(() => {
    if (open) document.body.style.overflowY = 'hidden';
    else document.body.style.overflowY = 'visible';
  }, [open]);

  return (
    <Menu.Button aria-label={open ? 'Close Navigation' : 'Open Navigation'}>
      <StyledHamburgerButton data-open={props.open}>
        <div />
      </StyledHamburgerButton>
      <VisuallyHidden>Toggle Mobile Menu</VisuallyHidden>
    </Menu.Button>
  );
};
