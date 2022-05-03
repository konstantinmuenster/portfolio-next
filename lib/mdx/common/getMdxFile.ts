import type { ContentMatter, MDXContentType } from '@config/content.config';
import matter from 'gray-matter';

import { getAllMdxFiles } from './getAllMdxFiles';

export const getMdxFile = (contentType: MDXContentType, slug: string) => {
  const allFiles = getAllMdxFiles(contentType);
  return allFiles.find(file => {
    const frontmatter = matter(file).data as ContentMatter[typeof contentType];
    return frontmatter.slug === slug;
  });
};
