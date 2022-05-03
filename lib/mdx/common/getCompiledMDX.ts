import type { PluggableList } from 'unified';
import { bundleMDX } from 'mdx-bundler';
import path from 'path';

import {
  MDXContentDir,
  MDXContentType,
  MDXGeneratedImgDir,
} from '@config/content.config';
import { setEsbuildExecutable } from './setEsbuildExecutable';

export const getCompiledMDX = async ({
  contentType,
  source,
  slug,
  remarkPlugins,
}: {
  contentType: MDXContentType;
  source: string;
  slug: string;
  remarkPlugins?: PluggableList | undefined;
}) => {
  try {
    setEsbuildExecutable();
    return await bundleMDX({
      source,
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
          '.JPG': 'file',
        };
        return options;
      },
    });
  } catch (error) {
    return undefined;
  }
};
