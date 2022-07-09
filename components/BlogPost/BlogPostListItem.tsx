import type { EnrichedBlogPostMatter } from '@pages/blog/[slug]';
import { Link } from '@components/Link';
import { styled } from '@config/stitches.config';
import { formatDate } from '@utils/date/formatDate';
import { TextDecoration } from '@components/TextDecoration';

const StyledBlogPostListItem = styled('li', {
  width: '100%',
  maxWidth: '37.5rem',

  '&:hover': {
    '.blog-post-list-item': {
      borderBottom: '1px dashed $secondary500',
    },

    '.blog-post-list-item [data-text-decoration] > svg': {
      fill: '$primary250',
      transform: 'rotate(45deg)',
    },
  },

  '.blog-post-list-item': {
    transition: '$default',
    paddingBottom: '0.5rem',
    borderBottom: '1px dashed $surface100',

    '.details': {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      columnGap: '0.5rem',
      fontSize: '$mini',
      lineHeight: '$mini',
      fontWeight: 500,
      color: '$subtext',
    },

    '.title': {
      marginTop: '0.25rem',
      fontWeight: 500,
      lineHeight: '$small',
      color: '$text',
    },

    '.summary': {
      color: '$subtext',
      fontSize: '$small',
      lineHeight: '$small',
      py: '0.25rem',
    },
  },
});

type BlogPostListItemProps = {
  post: EnrichedBlogPostMatter;
};

export const BlogPostListItem: React.FC<BlogPostListItemProps> = props => {
  return (
    <StyledBlogPostListItem>
      <Link to={props.post.path}>
        <div className="blog-post-list-item">
          <div className="details">
            <span className="published-at">
              {formatDate(props.post.publishedAt)}
            </span>
            <span>·</span>
            <span className="category">{props.post.category}</span>
          </div>
          <p className="title">
            {props.post.title} <TextDecoration variant="arrow" />
          </p>
          <p className="summary">{props.post.summary}</p>
        </div>
      </Link>
    </StyledBlogPostListItem>
  );
};
