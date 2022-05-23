import { useMemo } from 'react';
import Image from 'next/image';
import useSWR from 'swr';
import { Twitter } from '@styled-icons/evaicons-solid';

import type { GetCollaboratorsByFilePathResponse } from '@lib/api/github/collaborators';
import type { BlogPostMatter } from '@pages/blog/[slug]';
import { CONTENT_DIR_NAME, MDXContentType } from '@config/content.config';
import { styled } from '@config/stitches.config';
import { ContentWrapper } from '@components/Layout';
import { Link } from '@components/Link';
import { fetcher } from '@utils/fetcher';
import { formatDate } from '@utils/formatDate';
import { getGithubFileUrl } from '@utils/getGithubFileUrl';
import { ProfileCard } from '@components/Card';
import { generateTweetUrl } from '@utils/generateTweetUrl';

const StyledSection = styled('section', {
  '> div': {
    maxWidth: '42rem',
    marginTop: '5rem',
    paddingTop: '1rem',
    paddingBottom: '4rem',
    borderTop: '1px solid $surface100',

    '.blog-post-interactions': {
      display: 'flex',
      flexDirection: 'column',
      rowGap: '2rem',
      columnGap: '1rem',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: '3rem',

      '@sm': {
        flexDirection: 'row',
        alignItems: 'center',
        rowGap: 'unset',
        marginBottom: '5rem',
      },

      '.share-on-twitter': {
        fontSize: '$small',
        lineHeight: '$small',
        transition: '$default',

        svg: { verticalAlign: 'sub', color: '$primary100' },

        '&:hover svg': { color: '$primary500' },
      },

      '.edit-blog-post': {
        display: 'flex',
        flexDirection: 'row',
        columnGap: '1rem',
        alignItems: 'center',
        justifyContent: 'flex-end',

        '.blog-post-collaborators > a': {
          display: 'flex',
          flexShrink: 0,
          marginLeft: '-0.5rem',

          '&:first-of-type': { marginLeft: 0 },

          img: {
            borderRadius: '$round',
            border: '2px solid $surface100 !important',
          },
        },

        '.edit-on-github': {
          '> a': { fontSize: '$small', lineHeight: '$mini' },
          '.last-edit': {
            display: 'block',
            fontSize: '$mini',
            lineHeight: '$mini',
            color: '$subtext',
          },
        },
      },
    },

    '.blog-post-profile-appendix': { mx: 'auto' },
  },
});

export const BlogPostFooterSection: React.FC<BlogPostMatter> = props => {
  const { data, error } = useSWR<GetCollaboratorsByFilePathResponse>(
    `/api/github/collaborators?filePath=${CONTENT_DIR_NAME}${props.path}/index.mdx`,
    fetcher
  );

  const Collaborators = useMemo(() => {
    if (error || !data) return undefined;
    return data.collaborators.map((collaborator, key) => {
      return (
        <Link
          key={key}
          to={`https://github.com/${collaborator.user}`}
          hideExternalHint
        >
          <Image
            src={collaborator.avatar}
            alt={collaborator.user}
            width={28}
            height={28}
          />
        </Link>
      );
    });
  }, [data, error]);

  return (
    <StyledSection>
      <ContentWrapper>
        <div className="blog-post-interactions">
          <div className="share-blog-post">
            <div className="share-on-twitter">
              <Link to={generateTweetUrl(props)} hideExternalHint>
                Share on Twitter <Twitter size={16} />
              </Link>
            </div>
          </div>
          <div className="edit-blog-post">
            <div className="blog-post-collaborators">{Collaborators}</div>
            <div className="edit-on-github">
              <Link
                to={getGithubFileUrl(MDXContentType.BlogPost, props.slug)}
                hideExternalHint
              >
                Edit on Github
              </Link>
              <span className="last-edit">
                {data?.lastEdited
                  ? `Last edited: ${formatDate(data.lastEdited)}`
                  : undefined}
              </span>
            </div>
          </div>
        </div>
        <ProfileCard className="blog-post-profile-appendix" accent />
      </ContentWrapper>
    </StyledSection>
  );
};
