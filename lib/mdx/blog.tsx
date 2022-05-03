import type { PluggableList } from 'unified';
import matter from 'gray-matter';
import calculateReadingTime from 'reading-time';
import remarkSlug from 'remark-slug';
import remarkAutolinkHeadings from 'remark-autolink-headings';
import { remarkMdxImages } from 'remark-mdx-images';

import type { BlogPostMatter } from '@pages/blog/[slug]';
import { MDXContentType } from '@config/content.config';
import { getAllMdxFiles } from './common/getAllMdxFiles';
import { getCompiledMdx } from './common/getCompiledMdx';

const remarkPlugins: PluggableList = [
  remarkMdxImages,
  remarkAutolinkHeadings,
  remarkSlug,
];

export const getAllBlogPosts = () => {
  return getAllMdxFiles(MDXContentType.BlogPost).map(({ slug, file }) => {
    return { slug, ...matter(file).data } as BlogPostMatter;
  });
};

export const getBlogPost = async (slug: string) => {
  const contentType = MDXContentType.BlogPost;
  const mdx = await getCompiledMdx({ slug, remarkPlugins, contentType });
  if (!mdx) return undefined;

  const readingTime = calculateReadingTime(mdx.code);

  const frontmatter = {
    slug,
    readingTime,
    ...mdx.frontmatter,
  } as BlogPostMatter;

  return { code: mdx.code, frontmatter };
};
