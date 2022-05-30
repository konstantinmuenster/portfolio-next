import { BlogPostGrid } from '@components/BlogPost/BlogPostGrid';
import { ContentWrapper } from '@components/Layout';
import { styled } from '@config/stitches.config';
import { BlogPostMatter } from '@pages/blog/[slug]';
import { byNewestDate } from '@utils/sort';

const StyledListingSection = styled('section', {
  py: '3rem',
});

type ListingSectionProps = {
  posts: BlogPostMatter[];
};

export const ListingSection: React.FC<ListingSectionProps> = props => {
  const sortedPosts = props.posts.sort(byNewestDate);

  return (
    <StyledListingSection id="blog-listing">
      <ContentWrapper>
        <BlogPostGrid posts={sortedPosts} />
      </ContentWrapper>
    </StyledListingSection>
  );
};
