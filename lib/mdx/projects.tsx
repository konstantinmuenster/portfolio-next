import type { PluggableList } from 'unified';
import matter from 'gray-matter';
import { remarkMdxImages } from 'remark-mdx-images';

import type { ProjectMatter } from '@pages/projects/[slug]';
import { MDXContentType } from '@config/content.config';
import { getAllMdxFiles } from './common/getAllMdxFiles';
import { getMdxFile } from './common/getMdxFile';
import { getCompiledMDX } from './common/getCompiledMDX';

const remarkPlugins: PluggableList = [remarkMdxImages];

export const getAllProjects = () => {
  return getAllMdxFiles(MDXContentType.Project)
    .map(file => matter(file).data as ProjectMatter)
    .filter(frontmatter => !!frontmatter.slug);
};

export const getProject = async (slug: string) => {
  const source = getMdxFile(MDXContentType.Project, slug);
  if (!source) return undefined;

  const mdx = await getCompiledMDX({
    slug,
    source,
    remarkPlugins,
    contentType: MDXContentType.Project,
  });

  return mdx
    ? {
        code: mdx.code,
        frontmatter: mdx.frontmatter as ProjectMatter,
      }
    : undefined;
};
