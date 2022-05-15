import { useEffect } from 'react';
import { Menu } from '@headlessui/react';

import { styled } from '@config/stitches.config';
import { VisuallyHidden } from '@components/VisuallyHidden';

const SVG_SIZE = 32;
const PADDING = 8;

export const BUTTON_SIZE = 8 + 32 + 8;

const StyledSvgWrapper = styled('div', {
  position: 'relative',
  padding: `${PADDING}px`,
  borderRadius: '$less',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  svg: {
    size: `${SVG_SIZE}px`,
    transform: 'rotate(0deg)',
    transformOrigin: 'center',
    transition: 'all 0.2s ease-in-out',
    line: { stroke: '$subtext' },
  },

  '&:hover': {
    backgroundColor: '$surface50',
    svg: { line: { stroke: '$primary900' } },
  },

  '&[data-open="true"]': {
    svg: { transform: 'rotate(-45deg)' },
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
      <StyledSvgWrapper data-open={props.open}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <line
            x1="4.8"
            y1="9.6"
            x2="27.2"
            y2="9.6"
            strokeWidth="3"
            strokeLinecap="round"
          ></line>
          <line
            x1="27.2"
            y1="22.4"
            x2="4.8"
            y2="22.4"
            strokeWidth="3"
            strokeLinecap="round"
          ></line>
        </svg>
      </StyledSvgWrapper>
      <VisuallyHidden>Toggle Mobile Menu</VisuallyHidden>
    </Menu.Button>
  );
};
