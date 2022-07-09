import { styled } from '@config/stitches.config';

import { HEADER_HEIGHT } from '@components/Header';
import { ContentWrapper } from '@components/Layout';
import { DroppableServices } from '@components/DroppableServices';

const StyledSection = styled('section', {
  paddingTop: `calc(${HEADER_HEIGHT}px + 2rem)`,
  paddingBottom: '5rem',
  backgroundColor: '$secondary50',
  borderBottom: '2px solid $border',

  '@md': { paddingTop: `calc(${HEADER_HEIGHT}px + 4rem)` },

  '> div': {
    '.hero-content': {
      width: '100%',
      maxWidth: '37.5rem',
      marginBottom: '2rem',

      h1: {
        color: '$primary900',
        marginBottom: '1.5rem',
      },
    },

    '.hero-interest': {
      color: '$subtext',
      fontSize: '$small',
      lineHeight: '$small',
      my: '2rem',
    },
  },
});

type HeroSectionProps = {
  openContactModal: () => void;
};

export const HeroSection: React.FC<HeroSectionProps> = props => {
  return (
    <StyledSection id="hero-section">
      <ContentWrapper>
        <div className="hero-content">
          <h1>Let&apos;s Build Together</h1>
          <p>
            Looking for a product-minded developer? I am a freelance web /
            product developer with over 5 years of experience and a background
            in product management.
          </p>
        </div>
        <DroppableServices {...props} />
        <p className="hero-interest">
          <span className="hero-interest-highlight">
            Interested in collaborating? –
          </span>{' '}
          Drop my avatar on one of the service cards to reach out to me.
        </p>
      </ContentWrapper>
    </StyledSection>
  );
};
