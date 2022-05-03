import type { PluggableList } from 'unified';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import remarkSlug from 'remark-slug';
import remarkAutolinkHeadings from 'remark-autolink-headings';
import { remarkMdxImages } from 'remark-mdx-images';

import type { BlogPostMatter } from '@pages/blog/[slug]';
import { MDXContentType } from '@config/content.config';
import { getAllMdxFiles } from './common/getAllMdxFiles';
import { getMdxFile } from './common/getMdxFile';
import { getCompiledMDX } from './common/getCompiledMDX';

const remarkPlugins: PluggableList = [
  remarkMdxImages,
  remarkAutolinkHeadings,
  remarkSlug,
];

export const getAllBlogPosts = () => {
  return getAllMdxFiles(MDXContentType.BlogPost)
    .map(file => matter(file).data as BlogPostMatter)
    .filter(frontmatter => !!frontmatter.slug);
};

export const getBlogPost = async (slug: string) => {
  const source = getMdxFile(MDXContentType.BlogPost, slug);
  if (!source) return undefined;

  const mdx = await getCompiledMDX({
    slug,
    source,
    remarkPlugins,
    contentType: MDXContentType.BlogPost,
  });

  return mdx
    ? {
        code: mdx.code,
        frontmatter: {
          readingTime: readingTime(mdx.code),
          ...mdx.frontmatter,
        } as BlogPostMatter,
      }
    : undefined;
};
