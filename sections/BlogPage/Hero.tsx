import { darkTheme, styled } from '@config/stitches.config';

import type { EnrichedBlogPostMatter } from '@pages/blog/[slug]';
import { HEADER_HEIGHT } from '@components/Header';
import { ContentWrapper } from '@components/Layout';
import { TrendingTopics } from '@components/TrendingTopics';
import { SubscribeRSS } from '@components/SubscribeRSS';
import { MediumFollowers } from '@components/MediumFollowers';

const StyledSection = styled('section', {
  paddingTop: `calc(${HEADER_HEIGHT}px + 2rem)`,
  paddingBottom: '1.5rem',
  backgroundColor: '$secondary50',
  borderBottom: '2px solid $border',

  '@md': { paddingTop: `calc(${HEADER_HEIGHT}px + 4rem)` },

  [`.${darkTheme} &`]: { backgroundColor: '$secondary50' },

  '> div': {
    '.hero-content': {
      width: '100%',
      maxWidth: '37.5rem',
      marginBottom: '2rem',

      h1: {
        color: '$primary900',
        fontWeight: 500,
        marginBottom: '1.5rem',
      },
      p: { color: '$subtext' },
    },

    '.hero-links': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      columnGap: '2rem',
      paddingTop: '4rem',
    },
  },
});

type HeroSectionProps = {
  posts: EnrichedBlogPostMatter[];
};

export const HeroSection: React.FC<HeroSectionProps> = props => {
  return (
    <StyledSection id="hero-section">
      <ContentWrapper>
        <div className="hero-content">
          <h1>Blog</h1>
          <p>
            I write monthly about React, TypeScript and everything else
            interesting in the web development and freelance space. Discover
            whatever you are interested in!
          </p>
        </div>
        <TrendingTopics posts={props.posts} />
        <div className="hero-links">
          <SubscribeRSS />
          <MediumFollowers />
        </div>
      </ContentWrapper>
    </StyledSection>
  );
};
