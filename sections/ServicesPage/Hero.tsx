import { styled } from '@config/stitches.config';

import { HEADER_HEIGHT } from '@components/Header';
import { ContentWrapper } from '@components/Layout';
import { Overhead } from '@components/Overhead';
import { Emoji } from '@components/Emoji';
import { Avatar } from '@components/Avatar';

const StyledSection = styled('section', {
  paddingTop: `calc(${HEADER_HEIGHT}px + 2rem)`,
  paddingBottom: '1.5rem',
  backgroundColor: '$primary50',
  borderBottom: '2px solid $border',

  '@md': { paddingTop: `calc(${HEADER_HEIGHT}px + 4rem)` },

  '> div': {
    '.hero-content': {
      width: '100%',
      maxWidth: '37.5rem',
      marginBottom: '2rem',

      h1: {
        color: '$primary900',
        marginBottom: '1.5rem',
      },
    },

    '.hero-services': {
      '.hero-services-list': {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        columnGap: '1rem',

        '.hero-service-item': {
          width: '100%',
          minWidth: '300px',
          background: '$secondary50',
          border: '2px solid $secondary50',
          borderRadius: '$default',
          px: '0.5rem',
          py: '0.75rem',
          marginTop: '1rem',

          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          columnGap: '0.5rem',

          '.service-item-content': {
            '.service-item-title': {
              display: 'block',
              fontWeight: 500,
              color: '$primary900',
              marginBottom: '0.25rem',
            },
            p: { fontSize: '$small', lineHeight: '$small', color: '$subtext' },
          },
        },

        '.hero-service-avatar': {
          background: 'transparent',
          borderStyle: 'dashed',
          minWidth: 'unset',
          alignSelf: 'stretch',
        },
      },
    },

    '.hero-interest': {
      color: '$subtext',
      fontSize: '$small',
      lineHeight: '$small',
      my: '2rem',
    },
  },
});

export const HeroSection: React.FC = () => {
  return (
    <StyledSection id="hero-section">
      <ContentWrapper>
        <div className="hero-content">
          <h1>Let&apos;s Build Together</h1>
          <p>
            Looking for a product-minded developer? I am a freelance web /
            product developer with over 5 years of experience and a background
            in product management.
          </p>
        </div>
        <div className="hero-services">
          <Overhead>How I Can Help You</Overhead>
          <div className="hero-services-list">
            <div className="hero-service-item">
              <Emoji type="👨‍💻" background="surface50" size="small" />
              <div className="service-item-content">
                <span className="service-item-title">Support Your Team</span>
                <p>I will join your team as a product & web developer.</p>
              </div>
            </div>
            <div className="hero-service-item">
              <Emoji type="🔨" background="surface50" size="small" />
              <div className="service-item-content">
                <span className="service-item-title">Build Your Ideas</span>
                <p>
                  I will shape and build products & websites for your business.
                </p>
              </div>
            </div>
            <div className="hero-service-item hero-service-avatar">
              <Avatar />
            </div>
          </div>
        </div>
        <p className="hero-interest">
          <span className="hero-interest-highlight">
            Interested in collaborating? –
          </span>{' '}
          Drop my avatar on a task to reach out to me.
        </p>
      </ContentWrapper>
    </StyledSection>
  );
};
