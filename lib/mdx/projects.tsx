import type { PluggableList } from 'unified';
import { readdirSync } from 'fs';
import { remarkMdxImages } from 'remark-mdx-images';
import { getPlaiceholder } from 'plaiceholder';

import type {
  EnrichedProjectMatter,
  ProjectMatter,
} from '@pages/projects/[slug]';
import { ContentRoutes, MDXContentType } from '@config/content.config';
import { getAllMdxFiles } from './common/getAllMdxFiles';
import { getCompiledMdx } from './common/getCompiledMdx';

const remarkPlugins: PluggableList = [remarkMdxImages];

export const getProject = async (slug: string) => {
  const contentType = MDXContentType.Project;
  const compiled = await getCompiledMdx<ProjectMatter>({
    slug,
    remarkPlugins,
    contentType,
  });

  if (!compiled?.mdx) return undefined;

  const path = `${ContentRoutes[MDXContentType.Project]}/${slug}`;
  const images = await resolveImagePaths(compiled);

  const frontmatter: EnrichedProjectMatter = {
    ...compiled.mdx.frontmatter,
    slug,
    path,
    images,
  };

  return { code: compiled.mdx.code, frontmatter };
};

export const getAllProjects = async () => {
  const projects = await Promise.all(
    getAllMdxFiles(MDXContentType.Project).map(async ({ slug }) => {
      const project = await getProject(slug);
      return project?.frontmatter;
    })
  );

  return projects.filter(Boolean) as EnrichedProjectMatter[];
};

// Since mdx-bundler doesn't resolve images in frontmatter automatically,
// we manually resolve the public image path and add a blurred placeholder.

const resolveImagePaths = async (
  compiled: Awaited<ReturnType<typeof getCompiledMdx>>
) => {
  if (!compiled) return [];

  const { mdx, generated } = compiled;
  const { images } = generated;

  const imagePaths = readdirSync(images.sourceDir, { withFileTypes: true })
    .filter(({ name }) => {
      const frontmatter = mdx.frontmatter as ProjectMatter;
      return frontmatter.images?.some(image => name.startsWith(image));
    })
    .map(({ name }) => `${images.publicDir}/${name}`);

  return await Promise.all(
    imagePaths.map(async image => {
      const placeholder = await getPlaiceholder(image, { size: 10 });
      return {
        src: placeholder.img.src,
        width: placeholder.img.width,
        height: placeholder.img.height,
        placeholder: placeholder.base64,
      };
    })
  );
};
