import { Masonry } from 'masonic';

import type { EnrichedBlogPostMatter } from '@pages/blog/[slug]';
import { useHasMounted } from '@hooks/useHasMounted';
import { BlogPostGridItem } from './BlogPostGridItem';
import { styled } from '@config/stitches.config';

const Styled404Placeholder = styled('div', {
  py: '2rem',
  color: '$subtext',
  lineHeight: '$big',
  fontSize: '$big',
  fontWeight: 500,
});

type BlogPostGridProps = {
  posts: EnrichedBlogPostMatter[];
};

export const BlogPostGrid: React.FC<BlogPostGridProps> = props => {
  const mounted = useHasMounted();

  if (!mounted) return <></>;

  if (!props.posts.length)
    return <Styled404Placeholder>No Articles found 😥</Styled404Placeholder>;

  return (
    <Masonry
      key={props.posts.length}
      items={props.posts}
      render={BlogPostGridItem}
      columnWidth={380}
      columnGutter={16}
    />
  );
};
