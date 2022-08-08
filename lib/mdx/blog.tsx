import type { PluggableList } from 'unified';
import calculateReadingTime from 'reading-time';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypePrism from 'rehype-prism-plus';
import rehypeCodeTitles from 'rehype-code-titles';
import remarkGfm from 'remark-gfm';
import { remarkMdxImages } from 'remark-mdx-images';
import { getPlaiceholder } from 'plaiceholder';
import { readdirSync } from 'fs';

import type {
  BlogPostMatter,
  EnrichedBlogPostMatter,
} from '@pages/blog/[slug]';
import { ContentRoutes, MDXContentType } from '@config/content.config';
import { getAllMdxFiles } from './common/getAllMdxFiles';
import { getCompiledMdx } from './common/getCompiledMdx';

const remarkPlugins: PluggableList = [remarkMdxImages, remarkGfm];

const rehypePlugins: PluggableList = [
  rehypeCodeTitles,
  rehypePrism,
  rehypeExternalLinks,
  rehypeSlug,
  rehypeAutolinkHeadings,
];

export const getAllBlogPosts = async () => {
  const blogPosts = await Promise.all(
    getAllMdxFiles(MDXContentType.BlogPost).map(async ({ slug }) => {
      const blogPost = await getBlogPost(slug);
      return blogPost?.frontmatter;
    })
  );

  return blogPosts.filter(Boolean) as EnrichedBlogPostMatter[];
};

export const getBlogPost = async (slug: string) => {
  const contentType = MDXContentType.BlogPost;
  const compiled = await getCompiledMdx<BlogPostMatter>({
    slug,
    remarkPlugins,
    rehypePlugins,
    contentType,
  });

  if (!compiled?.mdx) return undefined;

  const readingTime = calculateReadingTime(compiled.mdx.code);
  const path = `${ContentRoutes[MDXContentType.BlogPost]}/${slug}`;
  const banner = await resolveBannerObject(compiled);

  const frontmatter = {
    ...compiled.mdx.frontmatter,
    slug,
    path,
    readingTime,
    banner,
  } as EnrichedBlogPostMatter;

  return { code: compiled.mdx.code, frontmatter };
};

// Since mdx-bundler doesn't resolve images in frontmatter automatically,
// we manually resolve the public image path and add a blurred placeholder.

const resolveBannerObject = async (
  compiled: Awaited<ReturnType<typeof getCompiledMdx>>
) => {
  if (!compiled) return {};

  const images = compiled.generated.images;
  const frontmatter = compiled.mdx.frontmatter as BlogPostMatter;
  const banner = frontmatter.banner;
  if (!banner) return {};

  const file = readdirSync(images.sourceDir, { withFileTypes: true }).find(
    ({ name }) => banner.name && name.startsWith(banner.name)
  );
  if (!file) return {};

  const placeholder = await getPlaiceholder(
    `${images.publicDir}/${file.name}`,
    { size: 10 }
  );

  return {
    src: placeholder.img.src,
    placeholder: placeholder.base64,
    height: placeholder.img.height,
    width: placeholder.img.width,
    caption: banner.caption,
  };
};
