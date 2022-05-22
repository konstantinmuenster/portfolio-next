import type { PluggableList } from 'unified';
import matter from 'gray-matter';
import calculateReadingTime from 'reading-time';
import remarkSlug from 'remark-slug';
import remarkAutolinkHeadings from 'remark-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import { remarkMdxImages } from 'remark-mdx-images';

import type { BlogPostMatter } from '@pages/blog/[slug]';
import { ContentRoutes, MDXContentType } from '@config/content.config';
import { getAllMdxFiles } from './common/getAllMdxFiles';
import { getCompiledMdx } from './common/getCompiledMdx';

const remarkPlugins: PluggableList = [
  remarkMdxImages,
  remarkAutolinkHeadings,
  remarkSlug,
];

const rehypePlugins: PluggableList = [rehypeExternalLinks];

export const getAllBlogPosts = () => {
  return getAllMdxFiles(MDXContentType.BlogPost).map(({ slug, path, file }) => {
    return { slug, path, ...matter(file).data } as BlogPostMatter;
  });
};

export const getBlogPost = async (slug: string) => {
  const contentType = MDXContentType.BlogPost;
  const mdx = await getCompiledMdx({
    slug,
    remarkPlugins,
    rehypePlugins,
    contentType,
  });
  if (!mdx) return undefined;

  const readingTime = calculateReadingTime(mdx.code);
  const path = `${ContentRoutes[MDXContentType.BlogPost]}/${slug}`;

  const frontmatter = {
    slug,
    path,
    readingTime,
    ...mdx.frontmatter,
  } as BlogPostMatter;

  return { code: mdx.code, frontmatter };
};
