import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import { getMDXComponent, getMDXExport } from 'mdx-bundler/client';

import { getAllBlogPosts, getBlogPost } from 'lib/mdx';
import Image from 'next/image';
import { redirectTo } from '@utils/redirectTo';

export type BlogPostMatter = {
  title: string;
  slug: string;
  publishedAt: string;
  summary?: string;
  banner?: string;
  bannerCaption?: string;
  category?: string[];
  type?: string[];
  mediumUrl?: string;
};

type BlogPostProps = {
  code: string;
  frontmatter: BlogPostMatter;
};

const BlogPost: FC<BlogPostProps> = ({ code, frontmatter }) => {
  const MDXBody = React.useMemo(() => getMDXComponent(code), [code]);
  const { banner } = getMDXExport(code);
  return (
    <div>
      <h1>{frontmatter.title}</h1>
      {banner ? (
        <Image src={banner} alt={frontmatter.title} layout="fill" />
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
