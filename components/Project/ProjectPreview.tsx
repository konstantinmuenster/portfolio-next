import { useMemo } from 'react';

import type { EnrichedProjectMatter } from '@pages/projects/[slug]';
import { styled } from '@config/stitches.config';
import { Link } from '@components/Link';
import { Toast } from '@components/Toast';
import { Carousel, Picture } from '@components/Picture';
import { ContentWrapper } from '@components/Layout';

const StyledProjectPreview = styled('div', {
  '.project-content': {
    '> div': { width: '100%', maxWidth: '37.5rem' },

    '.project-description': {
      '.project-role': { color: '$subtext', fontWeight: 500 },

      h5: {
        my: '0.5rem',

        fontFamily: '$sans',
        fontWeight: 500,
        color: '$text',
        a: { color: '$text', paddingRight: '1.5rem' },

        svg: { size: 24 },

        '&:hover svg': {
          fill: '$primary250',
          transform: 'rotate(45deg)',
        },
      },

      p: { my: '1rem', color: '$subtext' },
    },

    '.project-category': { display: 'flex', columnGap: '0.5rem' },
  },
});

type ProjectPreviewProps = {
  project: EnrichedProjectMatter;
};

export const ProjectPreview: React.FC<ProjectPreviewProps> = props => {
  const emoji = useMemo(() => {
    return props.project.emoji
      ? {
          type: props.project.emoji,
          position: { top: 20 },
        }
      : undefined;
  }, [props.project.emoji]);

  return (
    <StyledProjectPreview>
      <Carousel>
        {props.project.images.map((image, key) => {
          return (
            <Picture
              key={key}
              src={image.src}
              placeholder={image.placeholder}
              alt={props.project.name}
              emoji={key === 0 ? emoji : undefined}
            />
          );
        })}
      </Carousel>
      <ContentWrapper className="project-content">
        <div className="project-description">
          <span className="project-role">{props.project.role}</span>
          <h5>
            {props.project.website ? (
              <Link to={props.project.website}>{props.project.name}</Link>
            ) : (
              props.project.name
            )}
          </h5>
          <p>{props.project.summary}</p>
        </div>
        <div className="project-tags">
          <span className="project-category">
            {props.project.domain?.map((name, key) => (
              <Toast key={key} color="green">
                {name}
              </Toast>
            ))}
            <Toast>{props.project.category}</Toast>
          </span>
        </div>
      </ContentWrapper>
    </StyledProjectPreview>
  );
};
