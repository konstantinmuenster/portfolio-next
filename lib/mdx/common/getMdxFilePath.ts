import path from 'path';

import { MDXContentDir, MDXContentType } from '@config/content.config';

export const getMdxFilePath = (contentType: MDXContentType, slug: string) =>
  path.join(MDXContentDir[contentType], slug, 'index.mdx');
