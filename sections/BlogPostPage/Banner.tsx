import Image from 'next/image';

import { styled } from '@config/stitches.config';
import { ContentWrapper } from '@components/Layout';
import { EnrichedBlogPostMatter } from '@pages/blog/[slug]';

const StyledBanner = styled(ContentWrapper, {
  marginTop: '-6rem',
  marginBottom: '4rem',

  '.image-wrapper': {
    position: 'relative',
    width: '100%',
    height: '12rem',
    padding: '0.5rem',

    '@sm': { height: '20rem', marginTop: '-10rem' },
    '@md': { height: '26rem', marginTop: '-13rem' },

    span: { overflow: 'visible !important', transition: 'all 100ms ease' },

    img: {
      borderRadius: '$default',
      border: '2px solid $surface100 !important',
      transition: 'all 100ms ease',
    },
  },
});

type BlogPostBannerProps = Pick<EnrichedBlogPostMatter, 'banner'> & {
  title: string;
};

export const BlogPostBanner: React.FC<BlogPostBannerProps> = props => {
  return props.banner?.src ? (
    <StyledBanner>
      <figure>
        <div className="image-wrapper">
          <Image
            src={props.banner.src}
            alt={props.title}
            blurDataURL={props.banner.placeholder}
            layout="fill"
            placeholder="blur"
            objectFit="cover"
            priority
          />
        </div>
        {props.banner.caption ? (
          <figcaption
            dangerouslySetInnerHTML={{ __html: props.banner.caption }}
          />
        ) : undefined}
      </figure>
    </StyledBanner>
  ) : (
    <></>
  );
};
