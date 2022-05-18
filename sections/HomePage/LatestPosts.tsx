import { useMemo } from 'react';

import type { BlogPostMatter } from '@pages/blog/[slug]';
import { styled } from '@config/stitches.config';
import { ContentRoutes, FeaturedPost } from '@config/content.config';
import { ContentWrapper } from '@components/Layout';
import { Link } from '@components/Link';
import { BlogPostList, FeaturedBlogPost } from '@components/BlogPost';
import { TextDecoration } from '@components/TextDecoration';

const StyledSection = styled('section', {
  '> .content': {
    paddingTop: '4rem',
    paddingBottom: '2rem',

    '.description': {
      width: '100%',
      maxWidth: '30rem',

      '.title': { marginBottom: '1.5rem' },
      '.subtitle': { marginBottom: '1.5rem', color: '$subtext' },
    },

    '.latest-posts-list': {
      my: '2rem',
    },

    '.discover-blog': {
      py: '2rem',

      'a:hover [data-text-decoration] > svg': {
        fill: '$primary250',
        transform: 'rotate(45deg)',
      },
    },
  },
});

type LatestPostsSectionProps = {
  posts: BlogPostMatter[];
};

export const LatestPostsSection: React.FC<LatestPostsSectionProps> = props => {
  const featuredPost = useMemo(() => {
    return props.posts.find(isFeaturedPost);
  }, [props.posts]);

  const latestPosts = useMemo(() => {
    return props.posts
      .filter(isNotFeaturedPost)
      .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))
      .slice(0, 3);
  }, [props.posts]);

  return (
    <StyledSection id="latest-posts-section">
      <ContentWrapper className="content">
        <div className="description">
          <h3 className="title">Latest Articles</h3>
          <p className="subtitle">
            I write monthly about React, TypeScript and everything else
            interesting in the web development and freelance space.
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

const isFeaturedPost = (post: BlogPostMatter) =>
  post.slug === FeaturedPost.slug;
const isNotFeaturedPost = (post: BlogPostMatter) =>
  post.slug !== FeaturedPost.slug;
