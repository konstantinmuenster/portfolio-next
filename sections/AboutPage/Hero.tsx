import PortraitImage from '../../public/portrait.jpg';

import { darkTheme, styled } from '@config/stitches.config';

import { HEADER_HEIGHT } from '@components/Header';
import { ContentWrapper } from '@components/Layout';
import { Picture } from '@components/Picture';
import { SocialProfiles } from '@components/SocialProfiles';
import { Emoji } from '@components/Emoji';

const StyledSection = styled('section', {
  '.hero-content': {
    paddingTop: `calc(${HEADER_HEIGHT}px + 2rem)`,
    paddingBottom: '4rem',
    backgroundColor: '$secondary50',
    borderBottom: '2px solid $border',

    '@md': { py: `calc(${HEADER_HEIGHT}px + 4rem)` },

    [`.${darkTheme} &`]: { backgroundColor: '$secondary50' },

    '> div': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      columnGap: '4rem',
      rowGap: '1rem',

      '@md': { flexDirection: 'row', rowGap: 'unset' },

      '.portrait': {
        flexShrink: 0,
        width: '18.75rem',
        height: '18.75rem',
        border: '2px solid $border',
        borderRadius: '$default',

        '@md': { height: '22.5rem', marginBottom: '0' },
      },

      '.hero-introduction': {
        h1: { fontWeight: 500, color: '$primary900', my: '2rem' },
        p: { marginBottom: '2rem' },
      },
    },
  },

  '.hero-cards': {
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    rowGap: '1rem',
    columnGap: '1rem',
    flexWrap: 'wrap',

    '@md': {
      alignItems: 'center',
      justifyContent: 'flex-start',
      columnGap: '3rem',
      rowGap: 'unset',
      marginTop: '-3rem',
    },

    '.hero-card-item': {
      '.title': {
        display: 'block',
        fontSize: '$mini',
        fontWeight: 500,
        lineHeight: '$mini',
        textTransform: 'uppercase',
        marginBottom: '0.5rem',
      },

      '.value': {
        display: 'flex',
        alignItems: 'center',
        columnGap: '0.5rem',
        background: '$surface100',
        padding: '0.5rem 1rem',
        borderRadius: '$default',
        transition: 'all 1s ease',

        '&:hover': {
          background: '$primary50',
          cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🔍</text></svg>") 16 0, auto`,
        },
      },
    },
  },
});

export const HeroSection: React.FC = () => {
  return (
    <StyledSection id="hero-section">
      <div className="hero-content">
        <ContentWrapper>
          <Picture
            src={PortraitImage}
            placeholder="blur"
            alt="Konstantin Münster Portrait"
            className="portrait"
          />
          <div className="hero-introduction">
            <h1>
              Writes code.
              <br />
              Thinks product.
            </h1>
            <p>
              As a web developer and former product manager, I love engineering
              as much as shipping great products.
            </p>
            <SocialProfiles />
          </div>
        </ContentWrapper>
      </div>
      <ContentWrapper className="hero-cards">
        <div className="hero-card-item">
          <span className="title">Currently Working As</span>
          <div className="value">
            Freelance Web Developer{' '}
            <Emoji type="👨‍💻" background="surface50" size="small" />
          </div>
        </div>
        <div className="hero-card-item">
          <span className="title">Area of Expertise</span>
          <div className="value">
            Frontend (React.js){' '}
            <Emoji type="⚙️" background="surface50" size="small" />
          </div>
        </div>
        <div className="hero-card-item">
          <span className="title">Located In</span>
          <div className="value">
            Hamburg (or Remote){' '}
            <Emoji type="📍" background="surface50" size="small" />
          </div>
        </div>
      </ContentWrapper>
    </StyledSection>
  );
};
