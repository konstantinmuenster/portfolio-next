import type { EnrichedBlogPostMatter } from '@pages/blog/[slug]';
import { darkTheme, styled, theme } from '@config/stitches.config';
import { Link } from '@components/Link';
import { formatDate } from '@utils/date/formatDate';
import { Toast } from '@components/Toast';
import { TextDecoration } from '@components/TextDecoration';

const StyledBlogPostGridItem = styled(Link, {
  display: 'block',
  position: 'relative',
  background: `${theme.colors.turquoise.value}7f`,
  px: '1rem',
  py: '1rem',
  borderRadius: '$default',
  border: '1px solid $surface100',
  transition: '$default',

  [`.${darkTheme} &`]: {
    backgroundColor: `${darkTheme.colors.secondary50.value}7f`,
  },

  '&:hover': {
    background: '$turquoise',
    [`.${darkTheme} &`]: { backgroundColor: '$secondary50' },

    h4: { color: '$primary900' },

    '.type': {
      '> span:first-of-type': { transform: 'translate(0)' },
      '[data-text-decoration] > svg': {
        visibility: 'visible',
        opacity: 1,
        transform: 'rotate(45deg)',
      },
    },
  },

  '.type': {
    position: 'absolute',
    top: 8,
    right: 8,

    '> span:first-of-type': {
      transition: '$default',
      transform: 'translate(25px)',
    },

    '[data-text-decoration] > svg': {
      fill: '$primary250',
      visibility: 'hidden',
      opacity: 0,
    },
  },

  '.published-at': {
    color: '$subtext',
    fontWeight: 400,
    fontSize: '$mini',
    lineHeight: '$mini',
  },

  h4: {
    fontFamily: '$serif',
    fontSize: '1.25rem',
    fontWeight: 400,
    lineHeight: '1.75rem',
    color: '$text',
    marginTop: '0.5rem',
    marginBottom: '0.75rem',
  },

  p: {
    color: '$subtext',
    fontSize: '$small',
    lineHeight: '$small',
  },
});

type BlogPostGridItemProps = {
  index: number;
  width: number;
  data: EnrichedBlogPostMatter;
};

export const BlogPostGridItem: React.FC<BlogPostGridItemProps> = props => {
  return (
    <StyledBlogPostGridItem to={props.data.path}>
      <div className="content">
        <div className="type">
          <Toast color="green">{props.data.type}</Toast>
          <TextDecoration variant="arrow" />
        </div>
        <span className="published-at">
          {formatDate(props.data.publishedAt)}
        </span>
        <h4>{props.data.title}</h4>
        <p>{props.data.summary}</p>
      </div>
    </StyledBlogPostGridItem>
  );
};
