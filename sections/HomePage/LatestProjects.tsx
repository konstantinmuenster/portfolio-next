import { useMemo } from 'react';

import type { EnrichedProjectMatter } from '@pages/projects/[slug]';
import { LatestProjects } from '@config/content.config';
import { styled } from '@config/stitches.config';
import { ContentWrapper } from '@components/Layout';
// import { Link } from '@components/Link';
// import { TextDecoration } from '@components/TextDecoration';
import { ProjectPreview } from '@components/Project';

const StyledSection = styled('section', {
  '> .latest-projects-list': {
    '> div:not(:last-of-type)': {
      marginBottom: '3rem',
      '@sm': { marginBottom: '4rem' },
      '@md': { marginBottom: '6rem' },
    },
  },

  '> .latest-projects-content': {
    paddingTop: '4rem',
    paddingBottom: '3rem',

    '.description': {
      width: '100%',
      maxWidth: '30rem',

      '.title': { marginBottom: '1.5rem' },
      '.subtitle': { color: '$subtext' },
    },

    '.discover-projects': {
      py: '2rem',

      'a:hover [data-text-decoration] > svg': {
        fill: '$primary250',
        transform: 'rotate(45deg)',
      },
    },
  },
});

type LatestProjectsSectionProps = {
  projects: EnrichedProjectMatter[];
};

export const LatestProjectsSection: React.FC<
  LatestProjectsSectionProps
> = props => {
  const latestProjects = useMemo(() => {
    return props.projects.filter(project => {
      return LatestProjects.includes(project.slug);
    });
  }, [props.projects]);

  return (
    <StyledSection id="latest-projects-section">
      <ContentWrapper className="latest-projects-content">
        <div className="description">
          <h3 className="title">Carefully crafted for you.</h3>
          <p className="subtitle">
            I love building products in collaboration with clients but also on
            my own. Discover some of my recent projects I selected for you.
          </p>
        </div>
      </ContentWrapper>
      <div className="latest-projects-list">
        {latestProjects.map((project, key) => (
          <ProjectPreview key={key} project={project} />
        ))}
      </div>
      <ContentWrapper className="latest-projects-content">
        {/* <div className="discover-projects">
          <Link to={ContentRoutes.projects}>
            Discover all {props.projects.length} projects{' '}
            <TextDecoration variant="arrow" />
          </Link>
        </div> */}
      </ContentWrapper>
    </StyledSection>
  );
};
