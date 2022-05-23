import { useMemo } from 'react';
import type { ReadTimeResults } from 'reading-time';
import type { GetStaticProps } from 'next';
import { getMDXComponent, getMDXExport } from 'mdx-bundler/client';

import { redirectTo } from '@utils/redirectTo';
import { getAllBlogPosts, getBlogPost } from '@lib/mdx/blog';
import { BlogPostHeroSection } from '@sections/BlogPostPage/Hero';
import { BlogPostBanner } from '@sections/BlogPostPage/Banner';
import { BlogPostFooterSection } from '@sections/BlogPostPage/Footer';
import { ContentWrapper } from '@components/Layout';
import { BlogPicture } from '@components/Picture';
import { styled } from '@config/stitches.config';
import { Pre } from '@lib/mdx/rehype/rehype-code-highlight';
import { Preview } from '@lib/mdx/rehype/rehype-code-highlight/components/Preview';
import { Code } from '@lib/mdx/rehype/rehype-code-highlight/components/Code';
import { CategoryColorMap, TypeColorMap } from '@config/content.config';

const StyledBlogPost = styled('article', {
  '.blog-post-content': {
    maxWidth: '42rem',

    p: { fontSize: '$big', lineHeight: '$big' },

    'ol > li, ul > li': { fontSize: '$big' },
    'h2, h3': { marginBottom: '1rem' },
    'h4, h5': { marginBottom: '-0.5rem' },

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

export type BlogPostMatter = {
  title: string;
  slug: string;
  path: string;
  publishedAt: string;
  summary?: string;
  category?: keyof typeof CategoryColorMap;
  type?: keyof typeof TypeColorMap;
  tags?: string[];
  mediumUrl?: string;
  readingTime?: ReadTimeResults;
};

export type BlogPostExports = {
  banner?: string;
  bannerCaption?: string;
};

type BlogPostProps = {
  code: string;
  frontmatter: BlogPostMatter;
};

const BlogPost: React.FC<BlogPostProps> = ({ code, frontmatter }) => {
  const MDXBody = useMemo(() => getMDXComponent(code), [code]);
  const mdxExports = getMDXExport<BlogPostExports, BlogPostMatter>(code);

  return (
    <StyledBlogPost>
      <BlogPostHeroSection {...frontmatter} />
      <BlogPostBanner
        title={frontmatter.title}
        banner={mdxExports.banner}
        bannerCaption={mdxExports.bannerCaption}
      />
      <ContentWrapper className="blog-post-content">
        <MDXBody
          components={{
            Preview: Preview,
            Image: BlogPicture,
            pre: Pre,
            code: Code,
          }}
        />
      </ContentWrapper>
      <BlogPostFooterSection {...frontmatter} />
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
  const paths = getAllBlogPosts().map(({ slug }) => ({ params: { slug } }));
  return { paths, fallback: false };
};

export default BlogPost;
