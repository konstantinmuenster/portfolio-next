import { BlogPostMatter } from '@pages/blog/[slug]';
import { Masonry } from 'masonic';
import { BlogPostGridItem } from './BlogPostGridItem';

type BlogPostGridProps = {
  posts: BlogPostMatter[];
};

export const BlogPostGrid: React.FC<BlogPostGridProps> = props => {
  return (
    <Masonry
      items={props.posts}
      render={BlogPostGridItem}
      columnWidth={380}
      columnGutter={16}
    />
  );
};
