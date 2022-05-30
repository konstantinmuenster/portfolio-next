import { Masonry } from 'masonic';

import type { BlogPostMatter } from '@pages/blog/[slug]';
import { useHasMounted } from '@hooks/useHasMounted';
import { BlogPostGridItem } from './BlogPostGridItem';

type BlogPostGridProps = {
  posts: BlogPostMatter[];
};

export const BlogPostGrid: React.FC<BlogPostGridProps> = props => {
  const mounted = useHasMounted();

  if (!mounted) return <></>;

  return (
    <Masonry
      items={props.posts}
      render={BlogPostGridItem}
      columnWidth={380}
      columnGutter={16}
    />
  );
};
