import { headerNavigation } from '@config/navigation.config';
import { darkTheme, styled } from '@config/stitches.config';

import { ThemeToggle } from '@components/ThemeToggle';
import { ContentWrapper } from '@components/Layout';
import { Logo } from '@components/Logo';
import { NavigationMenu } from '@components/NavigationMenu';
import { DropdownMenu } from '@components/DropdownMenu';

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
    gridTemplateColumns: 'auto 1fr auto',
    gridTemplateRows: '100%',
    alignItems: 'center',

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

    '> #theme-toggle': {
      mx: '2rem',
      justifySelf: 'flex-end',
      '@md': { marginRight: 0 },
    },
  },

  '#header-navigation': { display: 'none' },
  '#mobile-navigation': { display: 'flex' },

  '@md': {
    '#header-navigation': { display: 'flex' },
    '#mobile-navigation': { display: 'none' },
  },
});

export const Header = () => {
  return (
    <StyledHeader>
      <ContentWrapper>
        <Logo asLink />
        <NavigationMenu name="Header Navigation" items={headerNavigation} />
        <ThemeToggle />
        <DropdownMenu name="Mobile Navigation" items={headerNavigation} />
      </ContentWrapper>
    </StyledHeader>
  );
};
