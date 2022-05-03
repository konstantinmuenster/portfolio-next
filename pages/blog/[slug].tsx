import React, { FC } from 'react';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import { getMDXComponent, getMDXExport } from 'mdx-bundler/client';
import { ReadTimeResults } from 'reading-time';

import { redirectTo } from '@utils/redirectTo';
import { getAllBlogPosts, getBlogPost } from '@lib/mdx/blog';

export type BlogPostMatter = {
  title: string;
  slug: string;
  publishedAt: string;
  summary?: string;
  category?: string[];
  type?: string[];
  mediumUrl?: string;
  readingTime?: ReadTimeResults;
};

type BlogPostExports = {
  banner?: string;
  bannerCaption?: string;
};

type BlogPostProps = {
  code: string;
  frontmatter: BlogPostMatter;
};

const BlogPost: FC<BlogPostProps> = ({ code, frontmatter }) => {
  const MDXBody = React.useMemo(() => getMDXComponent(code), [code]);
  const mdxExports = getMDXExport<BlogPostExports, BlogPostMatter>(code);

  return (
    <div>
      <h1>{frontmatter.title}</h1>
      {mdxExports.banner ? (
        <div style={{ position: 'relative', width: 300, height: 400 }}>
          <Image
            src={mdxExports.banner}
            alt={frontmatter.title}
            layout="fill"
          />
          {mdxExports.bannerCaption}
        </div>
      ) : undefined}
      <MDXBody />
    </div>
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
