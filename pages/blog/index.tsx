import { ArticleJsonLd, ArticleJsonLdProps, NextSeo } from 'next-seo';
import type { GetStaticProps, NextPage } from 'next';

import { getAllBlogPosts } from '@lib/mdx/blog';

import { generateSeoProps, SiteUrl } from '@config/seo.config';
import { ContentRoutes } from '@config/content.config';
import { HeroSection } from '@sections/BlogPage/Hero';
import { ListingSection } from '@sections/BlogPage/Listing';
import { byNewestDate } from '@utils/sort';
import { generateRssFeed } from '@lib/rss/generateRssFeed';

import type { BlogPostMatter } from './[slug]';

const BlogTitle =
  'Tutorials & Guides for developers. React, Typescript, and more.';
const BlogDescription =
  'I write beginner-friendly and advanced posts on web development and careers.';

const seoProps = generateSeoProps({
  url: `${SiteUrl}${ContentRoutes.blog}`,
  title: BlogTitle,
  description: BlogDescription,
});

const jsonLdProps: ArticleJsonLdProps = {
  type: 'Blog',
  url: `${SiteUrl}${ContentRoutes.blog}`,
  title: BlogTitle,
  description: BlogDescription,
  authorName: 'Konstantin Münster',
  datePublished: new Date().toISOString(),
  images: [],
};

type BlogPageProps = {
  posts: BlogPostMatter[];
};

const BlogPage: NextPage<BlogPageProps> = props => {
  return (
    <>
      <ArticleJsonLd {...jsonLdProps} />
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
