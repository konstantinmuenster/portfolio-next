import { styled } from '@stitches/react';

import { headerNavigation } from '@config/navigation.config';

import { ContentWrapper } from './Layout';
import { Logo } from './Logo';
import { Navigation } from './Navigation';

const StyledHeader = styled('header', {
  padding: '1.5rem 0',

  '> div': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export const Header = () => {
  return (
    <StyledHeader>
      <ContentWrapper>
        <Logo asLink />
        <Navigation items={headerNavigation} />
      </ContentWrapper>
    </StyledHeader>
  );
};
