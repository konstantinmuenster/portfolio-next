import { useMemo } from 'react';

import type { EnrichedBlogPostMatter } from '@pages/blog/[slug]';
import { styled } from '@config/stitches.config';
import { ContentRoutes, FeaturedPost } from '@config/content.config';
import { ContentWrapper } from '@components/Layout';
import { Link } from '@components/Link';
import { BlogPostList, FeaturedBlogPost } from '@components/BlogPost';
import { TextDecoration } from '@components/TextDecoration';

const StyledSection = styled('section', {
  '> .content': {
    paddingTop: '6rem',
    paddingBottom: '4rem',

    '.description': {
      width: '100%',
      maxWidth: '30rem',

      '.title': { marginBottom: '1.5rem' },
      '.subtitle': { marginBottom: '2rem', color: '$subtext' },
    },

    '.latest-posts-list': {
      my: '3rem',
    },

    '.discover-blog': {
      'a:hover [data-text-decoration] > svg': {
        fill: '$primary250',
        transform: 'rotate(45deg)',
      },
    },
  },
});

type LatestPostsSectionProps = {
  posts: EnrichedBlogPostMatter[];
};

export const LatestPostsSection: React.FC<LatestPostsSectionProps> = props => {
  const featuredPost = useMemo(() => {
    return props.posts.find(isFeaturedPost);
  }, [props.posts]);

  const latestPosts = useMemo(() => {
    return props.posts.filter(isNotFeaturedPost).slice(0, 3);
  }, [props.posts]);

  return (
    <StyledSection id="latest-posts-section">
      <ContentWrapper className="content">
        <div className="description">
          <h3 className="title">Start reading my blog.</h3>
          <p className="subtitle">
            I write monthly about web and product development with React as well
            as how to become a better developer.
          </p>
        </div>
        <div className="featured-post">
          {featuredPost ? <FeaturedBlogPost post={featuredPost} /> : undefined}
        </div>
        <div className="latest-posts-list">
          <BlogPostList posts={latestPosts} />
        </div>
        <div className="discover-blog">
          <Link to={ContentRoutes.blog}>
            Discover all {props.posts.length} articles{' '}
            <TextDecoration variant="arrow" />
          </Link>
        </div>
      </ContentWrapper>
    </StyledSection>
  );
};

const isFeaturedPost = (post: EnrichedBlogPostMatter) =>
  post.slug === FeaturedPost.slug;
const isNotFeaturedPost = (post: EnrichedBlogPostMatter) =>
  post.slug !== FeaturedPost.slug;
