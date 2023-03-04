import { getBaseUrl } from '@utils/getBaseUrl';
import type { NextSeoProps } from 'next-seo';
import type { OpenGraphArticle } from 'next-seo/lib/types';
import { TwitterHandle } from './profiles.config';

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
    cardType: 'summary_large_image',
    handle: TwitterHandle,
  },
  openGraph: {
    url: input.url,
    title: input.title,
    description: input.description,
    images: input.image
      ? [
          {
            url: input.image,
            width: 1200,
            height: 630,
            alt: input.title,
          },
        ]
      : undefined,
    type: input.type ?? 'website',
    site_name: 'konstantin',
    article: input.article,
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
  image: `${baseUrl}/api/og`,
});
