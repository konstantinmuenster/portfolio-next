import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import { getMDXComponent, getMDXExport } from 'mdx-bundler/client';

import { redirectTo } from '@utils/router/redirectTo';
import { getAllProjects, getProject } from '@lib/mdx/projects';

export type ProjectMatter = {
  name: string;
  slug: string;
  path: string;
  website?: string;
  role?: string;
  period?: string;
  category?: string;
  emoji?: string;
  summary?: string;
  domain?: string[];
};

export type ProjectExports = {
  bannerImages?: string[];
};

export type ProjectProps = {
  code: string;
  frontmatter: ProjectMatter;
};

const Project: FC<ProjectProps> = ({ code, frontmatter }) => {
  const MDXBody = React.useMemo(() => getMDXComponent(code), [code]);
  const mdxExports = getMDXExport<ProjectExports, ProjectProps>(code);

  return (
    <div>
      <h1>{frontmatter.name}</h1>
      {mdxExports.bannerImages?.[0]}
      <MDXBody />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async context => {
  const slug = context.params?.slug;
  if (!slug || Array.isArray(slug)) return redirectTo('/404');
  const project = await getProject(slug);
  if (!project) return redirectTo('/404');
  return { props: { code: project.code, frontmatter: project.frontmatter } };
};

export const getStaticPaths = async () => {
  const paths = getAllProjects().map(({ slug }) => ({ params: { slug } }));
  return { paths, fallback: false };
};

export default Project;
