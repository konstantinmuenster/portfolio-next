import type { EnrichedBlogPostMatter } from '@pages/blog/[slug]';
import { styled } from '@config/stitches.config';
import { Link } from '@components/Link';
import { Toast } from '@components/Toast';
import { TextDecoration } from '@components/TextDecoration';
import { StyledLinkedBaseCardWrapper } from '@components/Card/Base';
import { CategoryColorMap, TypeColorMap } from '@config/content.config';

const StyledFeaturedBlogPost = styled('div', {
  position: 'relative',

  borderRadius: '$default',
  border: '1px solid $surface100',
  background: '$secondary50',
  px: '1rem',
  paddingTop: '1rem',
  paddingBottom: '1.5rem',

  '&:hover > .header > .categories': {
    '> .category-list': { transform: 'translate(0)' },
    '[data-text-decoration] > svg': {
      visibility: 'visible',
      opacity: 1,
      transform: 'rotate(45deg)',
    },
  },

  '.title': {
    fontSize: '1.3rem',
    fontFamily: '$serif',
    fontWeight: 400,
    lineHeight: '1.4rem',
    marginTop: '0.875rem',
    marginBottom: '0.5rem',
  },

  '.summary': {
    color: '$subtext',
    fontSize: '$small',
    lineHeight: '$small',
  },

  '.header': {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    rowGap: '1rem',

    '@sm': {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      rowGap: 'unset',
      columnGap: '2rem',
    },

    '.label': {
      position: 'relative',
      display: 'block',
      fontSize: '$mini',
      lineHeight: '$mini',
      textTransform: 'uppercase',
      letterSpacing: '+0.5px',
      color: '$primary250',
      paddingLeft: '1rem',

      '&:before': {
        content: '',
        position: 'absolute',
        top: 4,
        left: 0,
        size: 8,
        background: '$primary250',
        borderRadius: '$round',
      },
    },

    '.categories': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      columnGap: '0.5rem',

      '> .category-list': {
        transition: '$default',
        display: 'flex',
        columnGap: '0.5rem',
        transform: 'translate(0)',

        '@sm': { transform: 'translate(25px)' },
      },

      '[data-text-decoration] > svg': {
        fill: '$primary250',
        visibility: 'hidden',
        opacity: 0,
      },
    },
  },
});

type FeaturedBlogPost = {
  post: EnrichedBlogPostMatter;
};

export const FeaturedBlogPost: React.FC<FeaturedBlogPost> = props => {
  return (
    <StyledLinkedBaseCardWrapper style={{ maxWidth: '37.5rem' }}>
      <Link to={props.post.path}>
        <StyledFeaturedBlogPost>
          <div className="header">
            <span className="label">Featured Article</span>
            <div className="categories">
              <div className="category-list">
                {props.post.type ? (
                  <span className="type">
                    <Toast color={TypeColorMap[props.post.type]}>
                      {props.post.type}
                    </Toast>
                  </span>
                ) : undefined}
                {props.post.category ? (
                  <span className="category">
                    <Toast color={CategoryColorMap[props.post.category]}>
                      {props.post.category}
                    </Toast>
                  </span>
                ) : undefined}
              </div>
              <TextDecoration variant="arrow" />
            </div>
          </div>
          <h5 className="title">{props.post.title}</h5>
          <p className="summary">{props.post.summary}</p>
        </StyledFeaturedBlogPost>
      </Link>
    </StyledLinkedBaseCardWrapper>
  );
};
