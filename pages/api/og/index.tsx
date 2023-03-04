import { BackgroundCanvas, ProfileContent } from '@lib/api/og/styles';
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

const handler: NextApiHandler = async () => {
  const breeSerifData = await fetchBreeSerif;
  const notoSansData = await fetchNotoSans;

  return new ImageResponse(
    (
      <BackgroundCanvas>
        <ProfileContent
          font={'"Noto Sans", sans-serif'}
          accentFont={'"Bree Serif", serif'}
        />
      </BackgroundCanvas>
    ),
    {
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
    }
  );
};

export default handler;
