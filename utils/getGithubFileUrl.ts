import {
  CONTENT_DIR_NAME,
  MDXContentType,
  REPOSITORY_NAME,
} from '@config/content.config';
import { socialProfiles } from '@config/profiles.config';

export const getGithubFileUrl = (contentType: MDXContentType, slug: string) => {
  const githubProfile =
    socialProfiles.find(profile => profile.to.includes('github.com'))?.to ??
    'https://github.com/konstantinmuenster/';

  return `${githubProfile}${REPOSITORY_NAME}/blob/main/${CONTENT_DIR_NAME}/${contentType}/${slug}/index.mdx`;
};
