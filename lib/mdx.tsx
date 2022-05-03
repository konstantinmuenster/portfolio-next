import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remarkMdxImages } from 'remark-mdx-images';
import remarkSlug from 'remark-slug';
import remarkAutolinkHeadings from 'remark-autolink-headings';
import { bundleMDX } from 'mdx-bundler';

import { BlogPostMatter } from 'pages/blog/[slug]';
import { setEsbuildExecutable } from '@utils/setEsbuildExecutable';

const CWD = process.cwd();
const BLOG_DIR = path.join(CWD, 'content', 'blog');
const BLOG_GENERATED_IMG_DIR = path.join(CWD, 'public', 'images', 'blog');

const getMdxFilePath = (slug: string) => path.join(BLOG_DIR, slug, 'index.mdx');

const getAllMdxFiles = () => {
  return fs
    .readdirSync(BLOG_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => fs.readFileSync(getMdxFilePath(dirent.name), 'utf-8'));
};

const findMdxFileBySlug = (slug: string) => {
  const allFiles = getAllMdxFiles();
  return allFiles.find(file => {
    const frontmatter = matter(file).data as BlogPostMatter;
    return frontmatter.slug === slug;
  });
};

const getCompiledMDX = async (source: string, slug: string) => {
  try {
    setEsbuildExecutable();
    return await bundleMDX({
      source,
      cwd: path.join(BLOG_DIR, slug),
      mdxOptions(options) {
        options.remarkPlugins = [
          ...(options.remarkPlugins ?? []),
          remarkMdxImages,
          remarkAutolinkHeadings,
          remarkSlug,
        ];
        return options;
      },
      esbuildOptions: options => {
        options.outdir = path.join(BLOG_GENERATED_IMG_DIR, slug);
        options.publicPath = `/images/blog/${slug}`;
        options.write = true;
        options.loader = {
          ...options.loader,
          '.png': 'file',
          '.jpeg': 'file',
          '.jpg': 'file',
          '.JPG': 'file',
        };
        return options;
      },
    });
  } catch (error) {
    return undefined;
  }
};

export const getAllBlogPosts = () => {
  return getAllMdxFiles()
    .map(file => matter(file).data as BlogPostMatter)
    .filter(frontmatter => !!frontmatter.slug);
};

export const getBlogPost = async (slug: string) => {
  const source = findMdxFileBySlug(slug);
  return source ? await getCompiledMDX(source, slug) : undefined;
};
