import { getBaseUrl } from '@utils/getBaseUrl';
import type { NextSeoProps } from 'next-seo';
import type { OpenGraphArticle } from 'next-seo/lib/types';

const baseUrl = getBaseUrl();

type SeoPropsBuilderInput = {
  url?: string;
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article';
  article?: OpenGraphArticle;
};

export const generateSeoProps = (
  input: SeoPropsBuilderInput
): NextSeoProps => ({
  canonical: input.url,
  title: input.title,
  description: input.description,
  twitter: {
    cardType: 'summary',
  },
  openGraph: {
    url: input.url,
    title: input.title,
    description: input.description,
    type: input.type ?? 'website',
    site_name: 'konstantin',
    article: input.article,
    images: input.image
      ? [
          {
            url: input.image,
            alt: input.title,
            width: 1200,
            height: 630,
          },
        ]
      : undefined,
    profile: {
      firstName: 'Konstantin',
      lastName: 'Münster',
      username: 'konstantinmuenster',
    },
  },
});

export const defaultSeoProps = generateSeoProps({
  title: 'Konstantin Münster – Web & Product Developer',
  description:
    'I am a freelance developer who helps individuals and companies build better web applications.',
  url: baseUrl,
  image: `${baseUrl}/default-og-image.png`,
});
