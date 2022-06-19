import type { GetStaticProps, NextPage } from 'next';

import { getAllBlogPosts } from '@lib/mdx/blog';

import type { BlogPostMatter } from './blog/[slug]';
import { HeroSection } from '@sections/BlogPage/Hero';
import { ListingSection } from '@sections/BlogPage/Listing';
import { byNewestDate } from '@utils/sort';
import { generateRssFeed } from '@lib/rss/generateRssFeed';

type BlogPageProps = {
  posts: BlogPostMatter[];
};

const BlogPage: NextPage<BlogPageProps> = props => {
  return (
    <>
      <HeroSection posts={props.posts} />
      <ListingSection posts={props.posts} />
    </>
  );
};

export default BlogPage;

export const getStaticProps: GetStaticProps = async () => {
  generateRssFeed();
  return { props: { posts: getAllBlogPosts().sort(byNewestDate) } };
};
