import Image from 'next/image';

import type { BlogPostExports } from '@pages/blog/[slug]';
import { styled } from '@config/stitches.config';
import { ContentWrapper } from '@components/Layout';

const StyledBanner = styled(ContentWrapper, {
  marginTop: '-6rem',
  marginBottom: '6rem',

  '.image-wrapper': {
    position: 'relative',
    width: '100%',
    height: '12rem',
    padding: '0.5rem',

    '@sm': { height: '20rem', marginTop: '-10rem' },
    '@md': { height: '26rem', marginTop: '-13rem' },

    span: { overflow: 'visible !important' },

    img: {
      borderRadius: '$default',
      border: '2px solid $surface100 !important',
    },
  },
});

type BlogPostBannerProps = BlogPostExports & { title: string };

export const BlogPostBanner: React.FC<BlogPostBannerProps> = props => {
  return (
    <StyledBanner>
      {props.banner ? (
        <figure>
          <div className="image-wrapper">
            <Image
              src={props.banner}
              alt={props.title}
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          {props.bannerCaption ? (
            <figcaption
              dangerouslySetInnerHTML={{ __html: props.bannerCaption }}
            />
          ) : undefined}
        </figure>
      ) : undefined}
    </StyledBanner>
  );
};
