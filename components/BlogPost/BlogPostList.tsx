import { styled } from '@config/stitches.config';
import type { BlogPostMatter } from '@pages/blog/[slug]';
import { BlogPostListItem } from './BlogPostListItem';

const StyledBlogPostList = styled('ul', {
  '&.reset > li': { my: '2rem' },
});

type BlogPostListProps = {
  posts: BlogPostMatter[];
};

export const BlogPostList: React.FC<BlogPostListProps> = props => {
  return (
    <StyledBlogPostList className="reset">
      {props.posts.map((post, key) => {
        return <BlogPostListItem key={key} post={post} />;
      })}
    </StyledBlogPostList>
  );
};
