import {
  BackgroundCanvas,
  BlogPostContent,
  ProfileContent,
} from '@lib/api/og/styles';
import { ImageResponse } from '@vercel/og';
import { NextApiHandler } from 'next';

export const config = {
  runtime: 'edge',
};

const fetchBreeSerif = fetch(
  new URL('../../../public/fonts/BreeSerifRegular.woff', import.meta.url).href
).then(res => res.arrayBuffer());

const fetchNotoSans = fetch(
  new URL('../../../public/fonts/NotoSans-Regular.ttf', import.meta.url).href
).then(res => res.arrayBuffer());

const handler: NextApiHandler = async req => {
  try {
    if (!req.url) throw new Error('No URL provided');

    const breeSerifData = await fetchBreeSerif;
    const notoSansData = await fetchNotoSans;

    const { searchParams } = new URL(req.url);

    const hasTitle = searchParams.has('title');
    const title = hasTitle ? searchParams.get('title') : undefined;

    const hasCategory = searchParams.has('category');
    const category = hasCategory ? searchParams.get('category') : undefined;

    const Content = hasTitle ? (
      <BlogPostContent
        font={'"Noto Sans", sans-serif'}
        accentFont={'"Bree Serif", serif'}
        title={title}
        category={category}
      />
    ) : (
      <ProfileContent
        font={'"Noto Sans", sans-serif'}
        accentFont={'"Bree Serif", serif'}
      />
    );

    return new ImageResponse(<BackgroundCanvas>{Content}</BackgroundCanvas>, {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Bree Serif',
          data: breeSerifData,
          style: 'normal',
        },
        {
          name: 'Noto Sans',
          data: notoSansData,
          style: 'normal',
        },
      ],
    });
  } catch {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
};

export default handler;
