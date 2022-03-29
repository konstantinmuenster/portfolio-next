import { KeyboardEvent, useCallback } from 'react';

import { styled } from '@config/stitches.config';

type HamburgerIconProps = {
  isMenuOpen: boolean;
  onClickHandler: () => void;
};

const StyledHamburgerButton = styled('button', {
  position: 'relative',
  zIndex: 20,
  padding: '0.5rem $pagePadding',
  backgroundColor: 'transparent',
  display: 'flex',
  width: '65px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-end',

  '> div': {
    background: '$text',
    borderRadius: '$default',
    height: '4px',
    margin: '3.5px 0',
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

  '&[aria-expanded="true"] > div:nth-of-type(1)': {
    transformOrigin: 'bottom',
    transform: 'rotateZ(45deg) translate(7px,7px)',
  },

  '&[aria-expanded="true"] > div:nth-of-type(2)': {
    transformOrigin: 'top',
    transform: 'rotateZ(-45deg)',
  },

  '&[aria-expanded="true"] > div:nth-of-type(3)': {
    transformOrigin: 'bottom',
    width: '50%',
    transform: 'translate(-3px,-7px) rotateZ(45deg)',
  },
});

export const HamburgerIcon = ({
  isMenuOpen,
  onClickHandler,
}: HamburgerIconProps) => {
  const keyDownHandler = useCallback(
    (event: KeyboardEvent) => {
      event.preventDefault();

      switch (event.key) {
        case 'Enter':
          if (isMenuOpen) onClickHandler();
        case 'Escape':
        case 'Esc':
          onClickHandler();
      }
    },
    [isMenuOpen, onClickHandler]
  );

  return (
    <StyledHamburgerButton
      type="button"
      aria-expanded={!isMenuOpen ? 'false' : 'true'}
      aria-label={!isMenuOpen ? 'Open Navigation' : 'Close Navigation'}
      onClick={onClickHandler}
      onKeyDown={keyDownHandler}
    >
      <div />
      <div />
      <div />
    </StyledHamburgerButton>
  );
};
