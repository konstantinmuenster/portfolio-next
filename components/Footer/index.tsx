import { SocialProfiles } from '@components/SocialProfiles';
import { footerNavigation } from '@config/navigation.config';
import { socialProfiles } from '@config/profiles.config';
import { darkTheme, styled } from '@config/stitches.config';

import { ContentWrapper } from '../Layout';
import { NavigationMenu } from '../NavigationMenu';

const StyledFooter = styled('footer', {
  py: '1rem',
  px: '$pagePadding',
  backgroundColor: '$surface250',
  borderTop: '2px solid #000000',

  [`.${darkTheme} &`]: {
    borderTop: '2px solid #2A2A2D',
  },

  '> div': {
    display: 'grid',
    gridTemplateColumns: '100%',
    gridTemplateRows: 'auto',
    rowGap: '1rem',

    height: 'auto',
    minHeight: '100px',
    my: '0.5rem',

    '@md': {
      gridTemplateColumns: 'auto 1fr',
      gridTemplateRows: '100%',
      rowGap: 0,
      my: 0,
    },
  },
});

export const Footer = () => {
  return (
    <StyledFooter>
      <ContentWrapper>
        <SocialProfiles profiles={socialProfiles} />
        <NavigationMenu
          name="Footer Navigation"
          location="footer"
          items={footerNavigation}
        />
      </ContentWrapper>
    </StyledFooter>
  );
};
