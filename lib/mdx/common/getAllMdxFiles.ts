import fs from 'fs';

import { MDXContentDir, MDXContentType } from '@config/content.config';
import { getMdxFilePath } from './getMdxFilePath';

export const getAllMdxFiles = (contentType: MDXContentType) => {
  return fs
    .readdirSync(MDXContentDir[contentType], { withFileTypes: true })
    .filter(dirent => {
      if (!dirent.isDirectory()) return false;
      const filePath = getMdxFilePath(contentType, dirent.name);
      return fs.existsSync(filePath);
    })
    .map(dirent => {
      const slug = dirent.name;
      const path = `/${contentType}/${slug}`;
      const filePath = getMdxFilePath(contentType, slug);
      return { slug, path, file: fs.readFileSync(filePath, 'utf-8') };
    });
};
