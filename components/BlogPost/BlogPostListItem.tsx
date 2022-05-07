import type { BlogPostMatter } from '@pages/blog/[slug]';
import { Link } from '@components/Link';
import { styled } from '@config/stitches.config';
import { formatDate } from '@utils/formatDate';
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

    '.published-at': {
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
  },
});

type BlogPostListItemProps = {
  post: BlogPostMatter;
};

export const BlogPostListItem: React.FC<BlogPostListItemProps> = props => {
  return (
    <StyledBlogPostListItem>
      <Link to={props.post.slug}>
        <div className="blog-post-list-item">
          <span className="published-at">
            {formatDate(props.post.publishedAt)}
          </span>
          <p className="title">
            {props.post.title} <TextDecoration variant="arrow" />
          </p>
        </div>
      </Link>
    </StyledBlogPostListItem>
  );
};
