import { NextSeo } from 'next-seo';
import type { GetStaticProps, NextPage } from 'next';

import { getAllBlogPosts } from '@lib/mdx/blog';

import type { BlogPostMatter } from './[slug]';
import { generateSeoProps, SiteUrl } from '@config/seo.config';
import { ContentRoutes } from '@config/content.config';
import { HeroSection } from '@sections/BlogPage/Hero';
import { ListingSection } from '@sections/BlogPage/Listing';
import { byNewestDate } from '@utils/sort';
import { generateRssFeed } from '@lib/rss/generateRssFeed';

const seoProps = generateSeoProps({
  url: `${SiteUrl}${ContentRoutes.blog}`,
  title: 'Tutorials & Guides for developers. React, Typescript, and more.',
  description:
    'I write beginner-friendly and advanced posts on web development and careers.',
});

type BlogPageProps = {
  posts: BlogPostMatter[];
};

const BlogPage: NextPage<BlogPageProps> = props => {
  return (
    <>
      <NextSeo {...seoProps} />
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
