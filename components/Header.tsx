import { styled } from '@stitches/react';
import { ContentWrapper } from './Layout';
import { Logo } from './Logo';

const StyledHeader = styled('header', {
  padding: '1.5rem 0',
});

export const Header = () => {
  return (
    <StyledHeader>
      <ContentWrapper>
        <Logo />
      </ContentWrapper>
    </StyledHeader>
  );
};
