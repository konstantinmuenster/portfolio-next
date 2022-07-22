import PortraitImage from '../../public/images/portrait-sitting.jpg';

import { styled } from '@config/stitches.config';
import { ContentWrapper } from '@components/Layout';
import { Picture } from '@components/Picture';
import { SocialProfiles } from '@components/SocialProfiles';
import { Link } from '@components/Link';

const StyledAboutSection = styled('section', {
  background: '$surface50',

  '> div': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    rowGap: '2rem',
    py: '5rem',

    '@md': {
      py: '6rem',
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: '4rem',
      rowGap: 'unset',
    },

    '.about-description': {
      marginBottom: '1rem',
      '.title': { marginBottom: '1.5rem' },
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
          <h3 className="title">A developer who cares about the product.</h3>
          <p>
            For me, programming is about bringing ideas and products to life.
            This is the reason why I started learning web development while
            working as a product manager.
          </p>
          <p>
            Nowadays, I support startups and small companies as a product
            developer. In that, I develop modern frontend applications and
            engage in product-related matters.
          </p>
          <p>
            So if you are looking for a hands-on developer who cares about users
            and code,{' '}
            <Link to="#contact-section">let’s put our heads together</Link>!
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
