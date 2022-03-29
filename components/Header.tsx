import { headerNavigation } from '@config/navigation.config';
import { styled } from '@config/stitches.config';

import { ContentWrapper } from './Layout';
import { Logo } from './Logo';
import { Navigation as NavigationBar } from './Navigation';
import { Sidedrawer } from './Sidedrawer';

const StyledHeader = styled('header', {
  padding: '1rem 0',

  '> div': {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gridTemplateRows: '100%',

    '> a.logo': {
      display: 'flex',
      alignItems: 'center',
      padding: '0.5rem $pagePadding',
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
        <NavigationBar name="Header Navigation" items={headerNavigation} />
        <Sidedrawer name="Mobile Navigation" items={headerNavigation} />
      </ContentWrapper>
    </StyledHeader>
  );
};
