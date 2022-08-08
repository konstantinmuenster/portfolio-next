import type { EnrichedBlogPostMatter } from '@pages/blog/[slug]';
import {
  CategoryColorMap,
  ContentRoutes,
  MDXContentType,
  TypeColorMap,
} from '@config/content.config';
import { darkTheme, styled } from '@config/stitches.config';
import { HEADER_HEIGHT } from '@components/Header';
import { ContentWrapper } from '@components/Layout';
import { Link } from '@components/Link';
import { Toast } from '@components/Toast';
import { Tooltip } from '@components/Tooltip';
import { Avatar } from '@components/Avatar';
import { formatDate } from '@utils/date/formatDate';
import { Icon } from '@components/Icon';

const StyledSection = styled('section', {
  paddingTop: `calc(${HEADER_HEIGHT}px + 4rem)`,
  paddingBottom: 'calc(4rem + 6rem)',
  backgroundColor: '$secondary50',
  borderBottom: '2px solid $border',

  [`.${darkTheme} &`]: { backgroundColor: '$secondary50' },

  '@sm': { paddingBottom: 'calc(4rem + 10rem)' },
  '@md': { paddingBottom: 'calc(4rem + 13rem)' },

  'h1.title': {
    color: '$primary900',
    marginTop: '1.5rem',
    marginBottom: '0.5rem',
    fontSize: '2rem',
    lineHeight: '2.5rem',

    '@sm': {
      fontSize: '2.5rem',
      lineHeight: '3rem',
    },
  },

  'p.summary': { color: '$subtext' },

  '.blog-post-hero-header': {
    position: 'relative',

    '.blog-post-back-anchor': {
      position: 'absolute',
      top: -40,
      left: 0,
      background: '$secondary100',
      size: 24,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '$less',

      '@lg': { top: 0, left: -40 },

      svg: { color: '$subtext' },
    },

    '.blog-post-categorization > *': {
      marginRight: '0.5rem',
    },
  },

  '.blog-post-hero-footer': {
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    rowGap: '1rem',
    columnGap: '1rem',

    '@md': { flexDirection: 'row', alignItems: 'center' },

    '.blog-post-hero-avatar': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      columnGap: '0.5rem',

      span: { fontSize: '$small', color: '$primary900' },
    },

    '.blog-post-hero-details': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexWrap: 'wrap',
      columnGap: '2rem',
      rowGap: '2rem',
      fontSize: '$small',
      color: '$subtext',
    },
  },
});

type BlogPostHeroSectionProps = EnrichedBlogPostMatter;

export const BlogPostHeroSection: React.FC<
  BlogPostHeroSectionProps
> = props => {
  return (
    <StyledSection>
      <ContentWrapper>
        <div className="blog-post-hero-header">
          <div className="blog-post-back-anchor">
            <Tooltip content="Back to overview">
              <Link
                to={ContentRoutes[MDXContentType.BlogPost]}
                aria-label="Go back to blog"
              >
                <Icon type="ChevronLeft" size={20} />
              </Link>
            </Tooltip>
          </div>
          <div className="blog-post-categorization">
            {props.type ? (
              <Toast color={TypeColorMap[props.type]}>{props.type}</Toast>
            ) : undefined}
            {props.category ? (
              <Toast color={CategoryColorMap[props.category]}>
                {props.category}
              </Toast>
            ) : undefined}
          </div>
        </div>
        <h1 className="title">{props.title}</h1>
        <p className="summary">{props.summary}</p>
        <div className="blog-post-hero-footer">
          <div className="blog-post-hero-avatar">
            <Avatar size={28} />
            <span>Konstantin Münster</span>
          </div>
          <div className="blog-post-hero-details">
            <div className="blog-post-hero-published-at">
              {formatDate(props.publishedAt)}
            </div>
            <div className="blog-post-hero-reading-time">
              {props.readingTime
                ? `${Math.round(props.readingTime.minutes)} min read`
                : undefined}
            </div>
            <div className="blog-post-hero-medium-link">
              {props.mediumUrl ? (
                <Link to={props.mediumUrl}>Read on Medium</Link>
              ) : undefined}
            </div>
          </div>
        </div>
      </ContentWrapper>
    </StyledSection>
  );
};
