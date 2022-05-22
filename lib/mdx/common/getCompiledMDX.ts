import type { PluggableList } from 'unified';
import { bundleMDX } from 'mdx-bundler';
import path from 'path';

import {
  MDXContentDir,
  MDXContentType,
  MDXGeneratedImgDir,
} from '@config/content.config';
import { setEsbuildExecutable } from './setEsbuildExecutable';
import { getMdxFilePath } from './getMdxFilePath';

export const getCompiledMdx = async ({
  slug,
  contentType,
  remarkPlugins,
}: {
  slug: string;
  contentType: MDXContentType;
  remarkPlugins?: PluggableList | undefined;
}) => {
  try {
    setEsbuildExecutable();
    return await bundleMDX({
      file: getMdxFilePath(contentType, slug),
      cwd: path.join(MDXContentDir[contentType], slug),
      mdxOptions(options) {
        options.remarkPlugins = [
          ...(options.remarkPlugins ?? []),
          ...(remarkPlugins ?? []),
        ];
        return options;
      },
      esbuildOptions: options => {
        options.outdir = path.join(MDXGeneratedImgDir[contentType], slug);
        options.publicPath = `/images/${contentType}/${slug}`;
        options.write = true;
        options.loader = {
          ...options.loader,
          '.png': 'file',
          '.jpeg': 'file',
          '.jpg': 'file',
          '.gif': 'file',
        };
        return options;
      },
    });
  } catch {
    return undefined;
  }
};
