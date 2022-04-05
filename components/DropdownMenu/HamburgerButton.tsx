import { Menu } from '@headlessui/react';

import { styled } from '@config/stitches.config';

export const BAR_HEIGHT = 4;
export const BAR_MARGIN = 3.5;

const StyledHamburgerButton = styled('div', {
  position: 'relative',
  padding: '0.5rem $pagePadding',
  backgroundColor: 'transparent',
  display: 'flex',
  width: '65px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-end',
  borderRadius: '$default',

  '&[data-open="true"]': {
    backgroundColor: '$background',
  },

  '> div': {
    background: '$text',
    borderRadius: '$default',
    height: BAR_HEIGHT + 'px',
    my: BAR_MARGIN + 'px',
    transition: '.4s  cubic-bezier(0.68, -0.6, 0.32, 1.6)',
  },

  '> div:nth-of-type(1)': {
    width: '100%',
  },

  '> div:nth-of-type(2)': {
    width: '100%',
  },

  '> div:nth-of-type(3)': {
    width: '75%',
  },

  '&[data-open="true"] > div:nth-of-type(1)': {
    transformOrigin: 'bottom',
    transform: 'rotateZ(45deg) translate(7px,7px)',
  },

  '&[data-open="true"] > div:nth-of-type(2)': {
    transformOrigin: 'top',
    transform: 'rotateZ(-45deg)',
  },

  '&[data-open="true"] > div:nth-of-type(3)': {
    transformOrigin: 'bottom',
    width: '50%',
    transform: 'translate(-3px,-7px) rotateZ(45deg)',
  },
});

export const HamburgerButton: React.FC<{ open: boolean }> = props => (
  <Menu.Button aria-label={props.open ? 'Close Navigation' : 'Open Navigation'}>
    <StyledHamburgerButton data-open={props.open}>
      <div />
      <div />
      <div />
    </StyledHamburgerButton>
  </Menu.Button>
);
