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

export const getCompiledMdx = async <T>({
  slug,
  contentType,
  remarkPlugins,
  rehypePlugins,
}: {
  slug: string;
  contentType: MDXContentType;
  remarkPlugins?: PluggableList | undefined;
  rehypePlugins?: PluggableList | undefined;
}) => {
  try {
    setEsbuildExecutable();

    const generatedImgDir = path.join(MDXGeneratedImgDir[contentType], slug);
    const generatedImgPath = `/images/${contentType}/${slug}`;

    const mdx = await bundleMDX<T>({
      file: getMdxFilePath(contentType, slug),
      cwd: path.join(MDXContentDir[contentType], slug),
      mdxOptions(options) {
        options.remarkPlugins = [
          ...(options.remarkPlugins ?? []),
          ...(remarkPlugins ?? []),
        ];
        options.rehypePlugins = [
          ...(options.rehypePlugins ?? []),
          ...(rehypePlugins ?? []),
        ];
        return options;
      },
      esbuildOptions: options => {
        options.outdir = generatedImgDir;
        options.publicPath = generatedImgPath;
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

    return {
      mdx,
      generated: {
        images: {
          sourceDir: generatedImgDir,
          publicDir: generatedImgPath,
        },
      },
    };
  } catch {
    return undefined;
  }
};
