import { SocialProfiles } from '@components/SocialProfiles';
import { footerNavigation } from '@config/navigation.config';
import { styled } from '@config/stitches.config';

import { ContentWrapper } from '../Layout';
import { NavigationMenu } from '../NavigationMenu';

const StyledFooter = styled('footer', {
  py: '1rem',
  backgroundColor: '$surface50',
  borderTop: '2px solid $border',

  '> div': {
    display: 'grid',
    gridTemplateColumns: '100%',
    gridTemplateRows: 'auto',
    rowGap: '2rem',
    height: 'auto',
    minHeight: '100px',
    my: '1rem',

    '@md': {
      gridTemplateColumns: 'auto 1fr',
      gridTemplateRows: '100%',
      rowGap: 0,
      my: 0,
    },

    '> div:first-of-type': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-end',
      order: 1,

      '@md': {
        alignItems: 'flex-start',
        order: 'unset',
      },

      '.copyright': {
        display: 'block',
        marginTop: '0.5rem',
        fontSize: '$mini',
        color: '$subtext',
      },
    },
  },
});

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <ContentWrapper>
        <div>
          <SocialProfiles alignment="right" />
          <span className="copyright">
            © {new Date().getFullYear()} Konstantin Münster. All rights
            reserved.
          </span>
        </div>
        <NavigationMenu
          name="Footer Navigation"
          location="footer"
          items={footerNavigation}
        />
      </ContentWrapper>
    </StyledFooter>
  );
};
