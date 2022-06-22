import { readdirSync, writeFileSync } from 'fs';
import path from 'path';
import qs from 'query-string';

import type { BlogPostMatter } from '@pages/blog/[slug]';
import type { ProjectMatter } from '@pages/projects/[slug]';
import { OGImageType } from '@components/OGImage';
import { MDXContentType, MDXGeneratedImgDir } from '@config/content.config';
import { GenerateOGImageQuery } from './generate';
import { generateRandom } from '@utils/generateRandom';
import { getBaseUrl } from '@utils/getBaseUrl';

const OG_IMAGE_FILE_SUFFIX = 'og-image.png';

export const getOGImagePath = async (
  type: OGImageType,
  frontmatter: BlogPostMatter | ProjectMatter
) => {
  const contentType =
    OGImageType.Blog === type
      ? MDXContentType.BlogPost
      : MDXContentType.Project;

  const dir = path.join(MDXGeneratedImgDir[contentType], frontmatter.slug);
  const file = readdirSync(dir).find(f => f.endsWith(OG_IMAGE_FILE_SUFFIX));

  if (file)
    return buildOGImageFilePath({
      type: contentType,
      slug: frontmatter.slug,
      name: file,
    });

  try {
    const query: GenerateOGImageQuery = {
      for: type,
      category: frontmatter.category,
      title: (frontmatter as BlogPostMatter).title,
      type: (frontmatter as BlogPostMatter).type,
    };

    const url = `${getBaseUrl()}/api/og-image/generate?${qs.stringify(query)}`;
    const res = await fetch(url, { headers: { Accept: 'application/json' } });
    const { data, success } = await res.json();
    if (!success || !data.image) return undefined;

    const fileName = generateRandom().toString() + '-' + OG_IMAGE_FILE_SUFFIX;
    const imagePath = path.join(dir, fileName);

    console.log(`\nStoring generated ogImage for ${query.for}: ${query.title}`);
    writeFileSync(imagePath, data.image, 'base64');

    return buildOGImageFilePath({
      type: contentType,
      slug: frontmatter.slug,
      name: fileName,
    });
  } catch (e) {
    return undefined;
  }
};

const buildOGImageFilePath = ({
  type,
  slug,
  name,
}: {
  type: MDXContentType;
  slug: string;
  name: string;
}) => {
  return path.join('/', 'images', type, slug, name);
};
