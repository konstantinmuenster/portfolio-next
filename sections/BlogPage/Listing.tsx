import { useMemo, useState } from 'react';
import { useRouter } from 'next/router';

import type { EnrichedBlogPostMatter } from '@pages/blog/[slug]';
import { styled } from '@config/stitches.config';
import { BlogPostGrid } from '@components/BlogPost/BlogPostGrid';
import { ContentWrapper } from '@components/Layout';
import { Overhead } from '@components/Overhead';
import { Option } from '@components/Option';
import { SearchInput } from '@components/SearchInput';
import { setQueryParam } from '@utils/router/setQueryParam';
import { getQueryParam } from '@utils/router/getQueryParam';
import { useDebounce } from '@hooks/useDebounce';
import { useSearchIndex } from '@hooks/useSearchIndex';

const StyledListingSection = styled('section', {
  minHeight: '80vh',

  '.blog-listing-search': { marginTop: '4rem', marginBottom: '3rem' },

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
  posts: EnrichedBlogPostMatter[];
};

export const ListingSection: React.FC<ListingSectionProps> = props => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const selectedTags = getQueryParam(router.query, 'tags');
  const selectedCategory = getQueryParam(router.query, 'category');

  const searchIndex = useSearchIndex(props.posts, [
    { name: 'title', weight: 0.7 },
    { name: 'tags', weight: 0.5 },
    { name: 'summary', weight: 0.2 },
  ]);

  const queriedPosts = useMemo(() => {
    return debouncedSearchQuery
      ? searchIndex.search(debouncedSearchQuery).map(result => result.item)
      : props.posts;
  }, [props.posts, debouncedSearchQuery, searchIndex]);

  const allCategories = collectCategoriesFromPosts(queriedPosts);

  const filteredPosts = useMemo(() => {
    return queriedPosts
      .filter(post => hasSelectedCategory(selectedCategory, post))
      .filter(post => hasSelectedTags(selectedTags, post));
  }, [queriedPosts, selectedCategory, selectedTags]);

  const selectCategory = (category: string) => {
    setQueryParam(router, { key: 'category', value: [category] });
  };

  const unselectCategory = () => {
    setQueryParam(router, { key: 'category', value: undefined });
  };

  return (
    <StyledListingSection id="blog-listing">
      <ContentWrapper>
        <div className="blog-listing-search">
          <SearchInput
            value={searchQuery}
            onChange={({ target }) => setSearchQuery(target.value)}
          />
        </div>
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

const collectCategoriesFromPosts = (posts: EnrichedBlogPostMatter[]) => {
  return posts.reduce((prev, post) => {
    const category = Array.isArray(post.category)
      ? post.category.join(',')
      : post.category;
    return category && !prev.includes(category) ? [...prev, category] : prev;
  }, [] as string[]);
};

const hasSelectedCategory = (
  selectedCategory: string[],
  post: EnrichedBlogPostMatter
) => {
  return selectedCategory.length ? post.category === selectedCategory[0] : true;
};

const hasSelectedTags = (
  selectedTags: string[],
  post: EnrichedBlogPostMatter
) => {
  return selectedTags.length
    ? selectedTags.some(tag => post.tags?.includes(tag))
    : true;
};
