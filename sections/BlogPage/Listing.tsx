import { useMemo } from 'react';
import { useRouter } from 'next/router';

import type { BlogPostMatter } from '@pages/blog/[slug]';
import { styled } from '@config/stitches.config';
import { BlogPostGrid } from '@components/BlogPost/BlogPostGrid';
import { ContentWrapper } from '@components/Layout';
import { Overhead } from '@components/Overhead';
import { Option } from '@components/Option';
import { setQueryParam } from '@utils/router/setQueryParam';
import { getQueryParam } from '@utils/router/getQueryParam';

const StyledListingSection = styled('section', {
  py: '3rem',

  '.blog-listing-options': {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    alignItems: 'start',
    justifyContent: 'start',

    '@sm': {
      flexDirection: 'row',
      alignItems: 'center',
    },

    '> span': {
      display: 'block',
      minWidth: '130px',
    },

    '.blog-listing-categories': {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: '0.5rem',
      alignItems: 'center',
      justifyContent: 'start',
    },
  },

  'div[role="grid"]': { my: '2rem' },
});

type ListingSectionProps = {
  posts: BlogPostMatter[];
};

export const ListingSection: React.FC<ListingSectionProps> = props => {
  const router = useRouter();

  const allCategories = collectCategoriesFromPosts(props.posts);

  const selectedTags = getQueryParam(router.query, 'tags');
  const selectedCategory = getQueryParam(router.query, 'category');

  const filteredPosts = useMemo(() => {
    return props.posts
      .filter(post => hasSelectedCategory(selectedCategory, post))
      .filter(post => hasSelectedTags(selectedTags, post));
  }, [props.posts, selectedCategory, selectedTags]);

  const selectCategory = (category: string) => {
    setQueryParam(router, { key: 'category', value: [category] });
  };

  const unselectCategory = () => {
    setQueryParam(router, { key: 'category', value: undefined });
  };

  return (
    <StyledListingSection id="blog-listing">
      <ContentWrapper>
        <div className="blog-listing-options">
          <Overhead>{`${filteredPosts.length} article${
            filteredPosts.length === 1 ? '' : 's'
          } shown`}</Overhead>
          <div className="blog-listing-categories">
            {allCategories.map((category, i) => {
              return (
                <Option
                  key={i}
                  label={category}
                  onAdd={category => {
                    selectCategory(category);
                  }}
                  onRemove={unselectCategory}
                  isSelected={selectedCategory.includes(category)}
                />
              );
            })}
          </div>
        </div>
        <BlogPostGrid posts={filteredPosts} />
      </ContentWrapper>
    </StyledListingSection>
  );
};

const collectCategoriesFromPosts = (posts: BlogPostMatter[]) => {
  return posts.reduce((prev, post) => {
    const category = Array.isArray(post.category)
      ? post.category.join(',')
      : post.category;
    return category && !prev.includes(category) ? [...prev, category] : prev;
  }, [] as string[]);
};

const hasSelectedCategory = (
  selectedCategory: string[],
  post: BlogPostMatter
) => {
  return selectedCategory.length ? post.category === selectedCategory[0] : true;
};

const hasSelectedTags = (selectedTags: string[], post: BlogPostMatter) => {
  return selectedTags.length
    ? selectedTags.some(tag => post.tags?.includes(tag))
    : true;
};
