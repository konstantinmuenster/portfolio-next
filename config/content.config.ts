import path from 'path';

import { BlogPostMatter } from 'pages/blog/[slug]';
import { ProjectMatter } from 'pages/projects/[slug]';

export const REPOSITORY_NAME = 'portfolio-next';
export const CONTENT_DIR_NAME = 'content';

const CWD = process.cwd();
const CONTENT_DIR = path.join(CWD, CONTENT_DIR_NAME);

export enum MDXContentType {
  BlogPost = 'blog',
  Project = 'projects',
}

export const MDXContentDir = {
  [MDXContentType.BlogPost]: path.join(CONTENT_DIR, 'blog'),
  [MDXContentType.Project]: path.join(CONTENT_DIR, 'projects'),
};

export const MDXGeneratedImgDir = {
  [MDXContentType.BlogPost]: path.join(CWD, 'public', 'images', 'blog'),
  [MDXContentType.Project]: path.join(CWD, 'public', 'images', 'projects'),
};

export type ContentMatter = {
  [MDXContentType.BlogPost]: BlogPostMatter;
  [MDXContentType.Project]: ProjectMatter;
};

export const ContentRoutes = {
  [MDXContentType.BlogPost]: '/blog',
  [MDXContentType.Project]: '/projects',
} as const;

export const FeaturedPost = {
  slug: 'how-to-build-a-text-editor-like-notion',
} as const;

export const LatestProjects = ['notion-clone'];

export const CategoryColorMap = {
  'Web Development': 'purple',
  Career: 'blue',
  Productivity: 'green',
} as const;

export const TypeColorMap = {
  Guide: 'green',
  Tutorial: 'green',
  Essay: 'green',
} as const;
