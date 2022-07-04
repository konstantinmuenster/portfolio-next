import { readdirSync, writeFileSync } from 'fs';
import path from 'path';
import qs from 'query-string';

import { OGImageType } from '@components/OGImage';
import { MDXContentType, MDXGeneratedImgDir } from '@config/content.config';
import { GenerateOGImageQuery } from './generate';
import { generateRandom } from '@utils/generateRandom';
import { getBaseUrl } from '@utils/getBaseUrl';

const OG_IMAGE_FILE_PREFIX = 'og-image--';

type GetOGImageProps = {
  slug: string;
  category?: string;
  title?: string;
  type?: string;
};

export const getOGImagePath = async (
  type: OGImageType,
  frontmatter: GetOGImageProps
) => {
  const contentType =
    OGImageType.Blog === type
      ? MDXContentType.BlogPost
      : MDXContentType.Project;

  const dir = path.join(MDXGeneratedImgDir[contentType], frontmatter.slug);
  const file = readdirSync(dir).find(f => f.startsWith(OG_IMAGE_FILE_PREFIX));

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
      title: frontmatter.title,
      type: frontmatter.type,
    };

    const url = `${getBaseUrl()}/api/og-image/generate?${qs.stringify(query)}`;
    const res = await fetch(url, { headers: { Accept: 'application/json' } });
    const { data, success } = await res.json();
    if (!success || !data.image) return undefined;

    const fileName = `${OG_IMAGE_FILE_PREFIX}${generateRandom().toString()}.png`;
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
