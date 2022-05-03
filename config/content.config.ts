import path from 'path';

import { BlogPostMatter } from 'pages/blog/[slug]';
import { ProjectMatter } from 'pages/projects/[slug]';

const CWD = process.cwd();
const CONTENT_DIR = path.join(CWD, 'content');

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
