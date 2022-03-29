import { styled } from '@config/stitches.config';
import { normalizeName } from '@utils/normalizeName';
import { useState } from 'react';
import { Box } from './Box';
import { HamburgerIcon } from './HamburgerIcon';

import { Navigation, NavigationProps } from './Navigation';

const StyledSidedrawer = styled('nav', {
  '> .drawer': {
    position: 'absolute',
    zIndex: 10,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '$secondary',
    padding: '15vh $pagePadding',
  },
});

export const Sidedrawer: React.FC<NavigationProps> = props => {
  const [isOpen, setIsOpen] = useState(false);
  const htmlName = normalizeName(props.name);

  return (
    <StyledSidedrawer id={htmlName} role="navigation">
      <HamburgerIcon
        isMenuOpen={isOpen}
        onClickHandler={() => setIsOpen(!isOpen)}
      />
      <Box className="drawer" hidden={!isOpen ? true : false}>
        <Navigation
          orientation="vertical"
          as="div"
          setHtmlId={false}
          {...props}
        />
      </Box>
    </StyledSidedrawer>
  );
};
