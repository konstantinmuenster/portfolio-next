import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import { Button } from '@components/Button';
import { HEADER_HEIGHT } from '@components/Header';
import { ContentWrapper } from '@components/Layout';
import { Link } from '@components/Link';
import { styled } from '@config/stitches.config';

const StyledNotFound = styled('section', {
  height: '100%',
  background: '$secondary50',
  paddingTop: `calc(${HEADER_HEIGHT}px + 4rem)`,

  '@md': { paddingTop: `calc(${HEADER_HEIGHT}px + 6rem)` },

  h1: { span: { paddingRight: '1rem' } },

  p: { color: '$subtext', marginTop: '1rem', marginBottom: '3rem' },

  '.notfound-actions': {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    columnGap: '2rem',
  },
});

const NotFoundPage: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <NextSeo nofollow />
      <StyledNotFound>
        <ContentWrapper>
          <h1>
            <span>🤷‍♂️</span>Ops, couldn&apos;t find anything.
          </h1>
          <p>
            Maybe the page has been deleted or you entered an incorrect URL.
          </p>
          <div className="notfound-actions">
            <Button
              as="button"
              onClick={() => router.back()}
              colors={{
                bg: 'primary250',
                bgHover: 'primary900',
                text: 'background',
              }}
            >
              Go back
            </Button>
            <Link to="/">Go to Home</Link>
          </div>
        </ContentWrapper>
      </StyledNotFound>
    </>
  );
};

export default NotFoundPage;
