import { useMemo } from 'react';
import type { ReadTimeResults } from 'reading-time';
import type { GetStaticProps } from 'next';
import { getMDXComponent } from 'mdx-bundler/client';
import { NextSeo, ArticleJsonLd, ArticleJsonLdProps } from 'next-seo';
import { setBannerData } from 'next-banner';
import useSWR from 'swr';

import {
  CategoryColorMap,
  CONTENT_DIR_NAME,
  TypeColorMap,
} from '@config/content.config';
import { styled } from '@config/stitches.config';
import { generateSeoProps } from '@config/seo.config';
import { redirectTo } from '@utils/router/redirectTo';
import { getBaseUrl } from '@utils/getBaseUrl';
import { fetcher } from '@utils/fetcher';
import { getAllBlogPosts, getBlogPost } from '@lib/mdx/blog';
import { GetCollaboratorsByFilePathResponse } from '@lib/api/github/collaborators';
import { BlogPostHeroSection } from '@sections/BlogPostPage/Hero';
import { ContentWrapper } from '@components/Layout';
import { BlogPicture } from '@components/Picture';
import { BlogPostBanner } from '@sections/BlogPostPage/Banner';
import { BlogPostFooterSection } from '@sections/BlogPostPage/Footer';
import { Pre } from '@components/Code';

const baseUrl = getBaseUrl();

const StyledBlogPost = styled('article', {
  '.blog-post-content': {
    maxWidth: '42rem',

    p: { fontSize: '$big', lineHeight: '$big' },

    'ol > li, ul > li': { fontSize: '$big' },
    'h2, h3': { marginBottom: '1rem', marginTop: '1.5rem' },
    'h4, h5': { marginBottom: '-0.5rem', marginTop: '1rem' },

    'h2[id], h3[id], h4[id], h5[id]': {
      position: 'relative',

      '&:hover > a > .icon-link:after': { visibility: 'visible' },
    },

    'h2[id] > a > .icon-link, h3[id] > a > .icon-link, h4[id] > a > .icon-link, h5[id] > a > .icon-link':
      {
        position: 'absolute',
        top: 0,
        left: '-1em',
        width: '100%',
        height: '2rem',
        transition: '$default',

        '&:after': {
          visibility: 'hidden',
          content: '#',
          opacity: 0.25,
          fontSize: '90%',
          fontFamily: '$sans',
        },

        '&:hover:after': { visibility: 'visible' },
      },

    'h2[id] > a > .icon-link:after': { top: 4 },
    'h3[id] > a > .icon-link:after': { top: 2 },
  },
});

export type EnrichedBlogPostMatter = Omit<BlogPostMatter, 'banner'> & {
  slug: string;
  path: string;
  readingTime?: ReadTimeResults;
  banner?: {
    src?: string;
    placeholder?: string;
    height?: number;
    width?: number;
    caption?: string;
  };
};

export type BlogPostMatter = {
  title: string;
  publishedAt: string;
  summary?: string;
  category?: keyof typeof CategoryColorMap;
  type?: keyof typeof TypeColorMap;
  tags?: string[];
  mediumUrl?: string;
  banner?: {
    name?: string;
    caption?: string;
  };
};

type BlogPostProps = {
  code: string;
  frontmatter: EnrichedBlogPostMatter;
};

const BlogPost: React.FC<BlogPostProps> = ({ code, frontmatter }) => {
  const MDXBody = useMemo(() => getMDXComponent(code), [code]);

  const { data, error } = useSWR<GetCollaboratorsByFilePathResponse>(
    `/api/github/collaborators?filePath=${CONTENT_DIR_NAME}${frontmatter.path}/index.mdx`,
    fetcher
  );

  const collaborators =
    data && !error
      ? { ...data }
      : { collaborators: [], lastModified: undefined };

  const lastModified = data?.lastEdited ?? frontmatter.publishedAt;
  const lastModifiedDate = new Date(lastModified).toISOString();
  const publishedAtDate = new Date(frontmatter.publishedAt).toISOString();

  setBannerData({ layout: 'post', custom: { category: frontmatter.category } });

  const seoProps = generateSeoProps({
    title: frontmatter.title,
    description: frontmatter.summary,
    url: `${baseUrl}${frontmatter.path}`,
    type: 'article',
    article: {
      publishedTime: publishedAtDate,
      tags: frontmatter.tags,
      authors: ['Konstantin Münster'],
    },
  });

  const jsonLdProps: ArticleJsonLdProps = {
    images: [],
    title: frontmatter.title,
    description: frontmatter.summary ?? '',
    url: `${baseUrl}${frontmatter.path}`,
    authorName: 'Konstantin Münster',
    publisherName: 'Konstantin Münster',
    publisherLogo: `${baseUrl}/images/logo-k.png`,
    datePublished: publishedAtDate,
    dateModified: lastModifiedDate,
  };

  return (
    <StyledBlogPost>
      <NextSeo {...seoProps} />
      <ArticleJsonLd keyOverride="article" {...jsonLdProps} />
      <BlogPostHeroSection {...frontmatter} />
      <BlogPostBanner title={frontmatter.title} banner={frontmatter.banner} />
      <ContentWrapper className="blog-post-content">
        <MDXBody
          components={{
            Image: BlogPicture,
            pre: Pre,
          }}
        />
      </ContentWrapper>
      <BlogPostFooterSection {...frontmatter} {...collaborators} />
    </StyledBlogPost>
  );
};

export const getStaticProps: GetStaticProps = async context => {
  const slug = context.params?.slug;
  if (!slug || Array.isArray(slug)) return redirectTo('/404');

  const post = await getBlogPost(slug);
  if (!post) return redirectTo('/404');

  return { props: { code: post.code, frontmatter: post.frontmatter } };
};

export const getStaticPaths = async () => {
  const paths = (await getAllBlogPosts()).map(({ slug }) => ({
    params: { slug },
  }));
  return { paths, fallback: false };
};

export default BlogPost;
