import type { EnrichedBlogPostMatter } from '@pages/blog/[slug]';
import type { EnrichedProjectMatter } from '@pages/projects/[slug]';
import { MDXContentType } from '@config/content.config';

export const generateTweetUrl = (
  matter: EnrichedBlogPostMatter | EnrichedProjectMatter
) => {
  const twitterUrl = 'https://twitter.com/intent/tweet';

  if (matter.path.includes(MDXContentType.Project)) {
    const projectMatter = matter as EnrichedProjectMatter;
    return `${twitterUrl}?text=${projectMatter.name} by Konstantin Münster&url=https://konstantin.digital${projectMatter.path}`;
  }

  if (matter.path.includes(MDXContentType.BlogPost)) {
    const blogPostMatter = matter as EnrichedBlogPostMatter;
    return `${twitterUrl}?text=${blogPostMatter.title} by Konstantin Münster&url=https://konstantin.digital${blogPostMatter.path}`;
  }

  return twitterUrl;
};
