import { BlogPostMatter } from '@pages/blog/[slug]';

export const byNewestDate: (a: BlogPostMatter, b: BlogPostMatter) => number = (
  a,
  b
) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt);
