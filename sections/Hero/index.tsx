import { darkTheme, styled, theme } from '@config/stitches.config';

import { HEADER_HEIGHT } from '@components/Header';
import { ContentWrapper } from '@components/Layout';
import { TextDecoration } from '@components/TextDecoration';
import { ProfileCard } from '@components/ProfileCard';

const StyledSection = styled('section', {
  paddingTop: `calc(${HEADER_HEIGHT}px + 3rem)`,
  textAlign: 'center',
  backgroundColor: '$turquoise',

  '@md': { paddingTop: `calc(${HEADER_HEIGHT}px + 5rem)` },

  [`.${darkTheme} &`]: { backgroundColor: '$secondary50' },

  '.hero-content': {
    marginBottom: '4rem',

    h1: {
      fontWeight: 500,
      color: '$primary900',
      marginBottom: '3rem',
    },

    p: {
      width: '90%',
      margin: '0 auto',
      fontSize: '$big',
      lineHeight: '$big',
      color: '$subtext',
    },
  },

  '.profile-card-bg': {
    linearGradient: '$turquoise 38%, $border 38%, $border 39%, $surface50 39%',
    [`.${darkTheme} &`]: {
      linearGradient:
        '$secondary50 38%, $border 38%, $border 39%, $surface50 39%',
    },
    '> div > div': { mx: 'auto' },
  },
});

export const HeroSection: React.FC = () => {
  const { colors } = theme;
  return (
    <StyledSection id="hero-section">
      <ContentWrapper className="hero-content">
        <h1>
          <TextDecoration variant="spark" color={colors.secondary500.value}>
            Building
          </TextDecoration>{' '}
          for a{' '}
          <TextDecoration variant="underline" color={colors.pinky.value}>
            better
          </TextDecoration>{' '}
          web
        </h1>
        <p>I help individuals and companies build better web applications.</p>
        <p>Available for freelance work in Hamburg or remote.</p>
      </ContentWrapper>
      <div className="profile-card-bg">
        <ContentWrapper>
          <ProfileCard accent />
        </ContentWrapper>
      </div>
    </StyledSection>
  );
};
