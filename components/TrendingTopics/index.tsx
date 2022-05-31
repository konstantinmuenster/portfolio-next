import { useMemo } from 'react';
import { useRouter } from 'next/router';
import qs from 'query-string';

import { styled } from '@config/stitches.config';
import { BlogPostMatter } from '@pages/blog/[slug]';
import { Overhead } from '@components/Overhead';
import { getQueryParam } from '@utils/router/getQueryParam';
import { Option } from '@components/Option';

const StyledTrendingTopics = styled('div', {
  '.trending-topics-list': {
    my: '1rem',
    display: 'flex',
    flexDirection: 'row',
    columnGap: '0.5rem',
  },
});

type TrendingTopicsProps = {
  posts: BlogPostMatter[];
};

export const TrendingTopics: React.FC<TrendingTopicsProps> = props => {
  const router = useRouter();
  const currentTags = getQueryParam(router.query, 'tags') ?? [];

  const trendingTopics = useMemo(
    () => getTrendingTopics(props.posts, { count: 5 }),
    [props.posts]
  );

  const updateTagsQuery = (tags: string[]) => {
    const query = qs.stringify({ tags }, { arrayFormat: 'comma' });
    router.push(`${router.pathname}?${query}`);
  };

  const addSelectedTag = (tag: string) => {
    updateTagsQuery([...currentTags, tag]);
    document.querySelector('footer')?.scrollIntoView();
  };

  const removeSelectedTag = (tag: string) => {
    updateTagsQuery(currentTags.filter(v => v !== tag));
  };

  return (
    <StyledTrendingTopics>
      <Overhead>Trending Topics</Overhead>
      <div className="trending-topics-list">
        {trendingTopics.map(({ name }, key) => {
          return (
            <Option
              key={key}
              label={name}
              onAdd={addSelectedTag}
              onRemove={removeSelectedTag}
              isSelected={currentTags.includes(name)}
              aria-label="Filter Articles By Topic"
            />
          );
        })}
      </div>
    </StyledTrendingTopics>
  );
};

const getTrendingTopics = (
  posts: BlogPostMatter[],
  { count }: { count?: number } = {}
) => {
  const tags = posts.reduce((tags, post) => {
    const newTags = (post.tags ?? []).reduce((_, tag) => {
      const tagKey = tag.toLowerCase();

      if (tags.hasOwnProperty(tagKey)) tags[tagKey].count++;
      else tags[tagKey] = { name: tag, count: 1 };

      return tags;
    }, {} as Record<string, { name: string; count: number }>);

    return { ...tags, ...newTags };
  }, {} as Record<string, { name: string; count: number }>);

  return Object.values(tags)
    .sort(({ count: ac }, { count: bc }) => bc - ac)
    .slice(0, count ?? 5);
};
