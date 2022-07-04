import { ArticleJsonLd, ArticleJsonLdProps, NextSeo } from 'next-seo';
import type { GetStaticProps, NextPage } from 'next';

import { getAllBlogPosts } from '@lib/mdx/blog';

import { generateSeoProps } from '@config/seo.config';
import { ContentRoutes } from '@config/content.config';
import { HeroSection } from '@sections/BlogPage/Hero';
import { ListingSection } from '@sections/BlogPage/Listing';
import { byNewestDate } from '@utils/sort';
import { generateRssFeed } from '@lib/rss/generateRssFeed';
import { getBaseUrl } from '@utils/getBaseUrl';

import type { EnrichedBlogPostMatter } from './[slug]';

const baseUrl = getBaseUrl();

const BlogTitle =
  'Tutorials & Guides for developers. React, Typescript, and more.';
const BlogDescription =
  'I write beginner-friendly and advanced posts on web development and careers.';

const seoProps = generateSeoProps({
  url: `${baseUrl}${ContentRoutes.blog}`,
  title: BlogTitle,
  description: BlogDescription,
});

const jsonLdProps: ArticleJsonLdProps = {
  type: 'Blog',
  url: `${baseUrl}${ContentRoutes.blog}`,
  title: BlogTitle,
  description: BlogDescription,
  authorName: 'Konstantin Münster',
  datePublished: new Date().toISOString(),
  images: [],
};

type BlogPageProps = {
  posts: EnrichedBlogPostMatter[];
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
  if (process.env.NODE_ENV !== 'development') await generateRssFeed();
  return { props: { posts: (await getAllBlogPosts()).sort(byNewestDate) } };
};
