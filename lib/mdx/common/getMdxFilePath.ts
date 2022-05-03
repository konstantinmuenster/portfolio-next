import { MDXContentDir, MDXContentType } from '@config/content.config';
import path from 'path';

export const getMdxFilePath = (contentType: MDXContentType, slug: string) =>
  path.join(MDXContentDir[contentType], slug, 'index.mdx');
