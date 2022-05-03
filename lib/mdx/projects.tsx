import type { PluggableList } from 'unified';
import matter from 'gray-matter';
import { remarkMdxImages } from 'remark-mdx-images';

import type { ProjectMatter } from '@pages/projects/[slug]';
import { MDXContentType } from '@config/content.config';
import { getAllMdxFiles } from './common/getAllMdxFiles';
import { getCompiledMdx } from './common/getCompiledMdx';

const remarkPlugins: PluggableList = [remarkMdxImages];

export const getAllProjects = () => {
  return getAllMdxFiles(MDXContentType.Project).map(({ slug, file }) => {
    return { slug, ...matter(file).data } as ProjectMatter;
  });
};

export const getProject = async (slug: string) => {
  const contentType = MDXContentType.Project;
  const mdx = await getCompiledMdx({ slug, remarkPlugins, contentType });
  if (!mdx) return undefined;

  const frontmatter = { slug, ...mdx.frontmatter } as ProjectMatter;
  return { code: mdx.code, frontmatter };
};
