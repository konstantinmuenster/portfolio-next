import { headerNavigation } from '@config/navigation.config';
import { darkTheme, styled } from '@config/stitches.config';

import { ContentWrapper } from './Layout';
import { Logo } from './Logo';
import { NavigationMenu } from './NavigationMenu';
import { DropdownMenu } from './DropdownMenu';

const StyledHeader = styled('header', {
  py: '1rem',
  px: '$pagePadding',
  backgroundColor: '$surface250',
  borderBottom: '2px solid #000000',

  [`.${darkTheme} &`]: {
    borderBottom: '2px solid #2A2A2D',
  },

  '> div': {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gridTemplateRows: '100%',

    '> a.logo': {
      display: 'flex',
      alignItems: 'center',
      py: '0.5rem',
      px: 0,
    },

    '> nav': {
      justifyContent: 'flex-end',
      flexDirection: 'row',
      alignItems: 'center',
    },
  },

  '#header-navigation': {
    display: 'none',
  },

  '#mobile-navigation': {
    display: 'flex',
  },

  '@md': {
    '#header-navigation': {
      display: 'flex',
    },
    '#mobile-navigation': {
      display: 'none',
    },
  },
});

export const Header = () => {
  return (
    <StyledHeader>
      <ContentWrapper>
        <Logo asLink />
        <NavigationMenu name="Header Navigation" items={headerNavigation} />
        <DropdownMenu name="Mobile Navigation" items={headerNavigation} />
      </ContentWrapper>
    </StyledHeader>
  );
};
