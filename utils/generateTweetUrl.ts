import type { BlogPostMatter } from '@pages/blog/[slug]';
import type { ProjectMatter } from '@pages/projects/[slug]';
import { MDXContentType } from '@config/content.config';

export const generateTweetUrl = (matter: BlogPostMatter | ProjectMatter) => {
  const twitterUrl = 'https://twitter.com/intent/tweet';

  if (matter.path.includes(MDXContentType.Project)) {
    const projectMatter = matter as ProjectMatter;
    return `${twitterUrl}?text=${projectMatter.name} by Konstantin Münster&url=https://konstantin.digital${projectMatter.path}`;
  }

  if (matter.path.includes(MDXContentType.BlogPost)) {
    const blogPostMatter = matter as BlogPostMatter;
    return `${twitterUrl}?text=${blogPostMatter.title} by Konstantin Münster&url=https://konstantin.digital${blogPostMatter.path}`;
  }

  return twitterUrl;
};
