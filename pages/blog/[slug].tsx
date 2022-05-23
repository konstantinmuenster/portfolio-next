import { useMemo } from 'react';
import type { ReadTimeResults } from 'reading-time';
import type { GetStaticProps } from 'next';
import { getMDXComponent, getMDXExport } from 'mdx-bundler/client';

import { redirectTo } from '@utils/redirectTo';
import { getAllBlogPosts, getBlogPost } from '@lib/mdx/blog';
import { BlogPostHeroSection } from '@sections/BlogPostPage/Hero';
import { BlogPostBanner } from '@sections/BlogPostPage/Banner';
import { ContentWrapper } from '@components/Layout';
import { BlogPicture } from '@components/Picture';
import { styled } from '@config/stitches.config';
import { Pre } from '@lib/mdx/rehype/rehype-code-highlight';
import { Preview } from '@lib/mdx/rehype/rehype-code-highlight/components/Preview';
import { Code } from '@lib/mdx/rehype/rehype-code-highlight/components/Code';

const StyledBlogPost = styled('article', {
  '.blog-post-content': {
    maxWidth: '42rem',

    p: { fontSize: '$big', lineHeight: '$big' },

    'ol > li, ul > li': { fontSize: '$big' },
    'h2, h3': { marginBottom: '1rem' },
    'h4, h5': { marginBottom: '-0.5rem' },
  },
});

export type BlogPostMatter = {
  title: string;
  slug: string;
  path: string;
  publishedAt: string;
  summary?: string;
  category?: string[];
  type?: string[];
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
