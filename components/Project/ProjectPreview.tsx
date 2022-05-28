import { useEffect, useMemo, useState } from 'react';
import { getMDXExport } from 'mdx-bundler/client';

import type { ProjectExports, ProjectProps } from '@pages/projects/[slug]';
import { styled } from '@config/stitches.config';
// import { Link } from '@components/Link';
// import { TextDecoration } from '@components/TextDecoration';
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
  project: ProjectProps;
};

export const ProjectPreview: React.FC<ProjectPreviewProps> = props => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    if (!props.project.code) return;
    const mdx = getMDXExport<ProjectExports, ProjectProps>(props.project.code);
    setImages(mdx.bannerImages ?? []);
  }, [props.project.code]);

  const emoji = useMemo(() => {
    return props.project.frontmatter.emoji
      ? {
          type: props.project.frontmatter.emoji,
          position: { top: 20 },
        }
      : undefined;
  }, [props.project.frontmatter.emoji]);

  const imageList = useMemo(() => {
    return images.length
      ? images.map((image, key) => {
          return (
            <Picture
              key={key}
              src={image}
              alt={props.project.frontmatter.name}
              emoji={key === 0 ? emoji : undefined}
            />
          );
        })
      : undefined;
  }, [images, props.project.frontmatter.name, emoji]);

  return (
    <StyledProjectPreview>
      <Carousel>{imageList}</Carousel>
      <ContentWrapper className="project-content">
        <div className="project-description">
          <span className="project-role">{props.project.frontmatter.role}</span>
          {/* <Link to={props.project.frontmatter.path}> */}
          <h5>
            {props.project.frontmatter.name}{' '}
            {/* <TextDecoration variant="arrow" /> */}
          </h5>
          {/* </Link> */}
          <p>{props.project.frontmatter.summary}</p>
        </div>
        <div className="project-tags">
          <span className="project-category">
            {props.project.frontmatter.domain?.map((name, key) => (
              <Toast key={key} color="green">
                {name}
              </Toast>
            ))}
            <Toast>{props.project.frontmatter.category}</Toast>
          </span>
        </div>
      </ContentWrapper>
    </StyledProjectPreview>
  );
};
