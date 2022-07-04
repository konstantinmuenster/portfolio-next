import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import { getMDXComponent } from 'mdx-bundler/client';

import { redirectTo } from '@utils/router/redirectTo';
import { getAllProjects, getProject } from '@lib/mdx/projects';

export type EnrichedProjectMatter = Omit<ProjectMatter, 'images'> & {
  images: { src: string; placeholder: string; height: number; width: number }[]; // resolved paths of images
  slug: string;
  path: string;
};

export type ProjectMatter = {
  name: string;
  website?: string;
  role?: string;
  period?: string;
  category?: string;
  emoji?: string;
  images?: string[]; // names of the referenced images
  summary?: string;
  domain?: string[];
  published?: boolean;
};

export type ProjectProps = {
  code: string;
  frontmatter: EnrichedProjectMatter;
};

const Project: FC<ProjectProps> = ({ code, frontmatter }) => {
  const MDXBody = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <div>
      <h1>{frontmatter.name}</h1>
      {frontmatter.images?.[0]}
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

const isPublished = (project: EnrichedProjectMatter) =>
  project.published !== false;

export const getStaticPaths = async () => {
  const projects = (await getAllProjects()).filter(isPublished);
  const paths = projects.map(({ slug }) => ({ params: { slug } }));
  return { paths, fallback: false };
};

export default Project;
