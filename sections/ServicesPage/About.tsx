import PortraitImage from '../../public/images/portrait-sitting.jpeg';

import { styled } from '@config/stitches.config';
import { ContentWrapper } from '@components/Layout';
import { Picture } from '@components/Picture';
import { SocialProfiles } from '@components/SocialProfiles';

const StyledAboutSection = styled('section', {
  background: '$secondary50',

  '> div': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    rowGap: '2rem',
    py: '3rem',

    '@md': {
      py: '4rem',
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: '4rem',
      rowGap: 'unset',
    },

    '.about-description': {
      '.title': { marginTop: '1rem', marginBottom: '1.5rem' },
      p: { marginBottom: '1rem' },
    },

    '.about-picture': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
      rowGap: '1rem',
    },
  },
});

export const AboutSection: React.FC = () => {
  return (
    <StyledAboutSection id="about-section">
      <ContentWrapper>
        <div className="about-description">
          <h3 className="title">Oh, another developer.</h3>
          <p>
            Yes, this might come to mind while browsing this page. But with
            being a former product manager and still in love with creating great
            products, I try to break out of the typical engineer role – at least
            a bit.
          </p>
          <p>
            For me, programming is about bringing ideas and products to life,
            and not solely about writing and shipping beautiful code (even
            though I can easily obsess over the latter too).
          </p>
          <p>
            My passion has always been at the intersection of engineering and
            product – so if you are looking for a hands-on developer who cares
            about users and code, let’s put our heads together!
          </p>
        </div>
        <div className="about-picture">
          <Picture
            src={PortraitImage}
            placeholder="blur"
            alt="Konstantin Münster Portrait"
            height="22rem"
            width="20rem"
            className="portrait"
          />
          <SocialProfiles />
        </div>
      </ContentWrapper>
    </StyledAboutSection>
  );
};
