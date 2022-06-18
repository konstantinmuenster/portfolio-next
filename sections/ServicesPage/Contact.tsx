import { darkTheme, styled } from '@config/stitches.config';
import { socialProfiles } from '@config/profiles.config';
import { ContentWrapper } from '@components/Layout';
import { Button } from '@components/Button';
import { SocialProfiles } from '@components/SocialProfiles';
import { Avatar } from '@components/Avatar';
import { useMemo } from 'react';

const ContactSectionSection = styled('section', {
  background: '$turquoise',

  [`.${darkTheme} &`]: { backgroundColor: '$secondary100' },

  '> div': {
    py: '4rem',

    '@md': { py: '6rem' },

    '.contact-content': {
      '.subtitle': {
        color: '$subtext',
        marginTop: '1rem',
        marginBottom: '3rem',
      },
    },

    '.contact-details': {
      '.contact-button': {
        display: 'flex',
        flexDirection: 'column-reverse',
        flexWrap: 'wrap',
        columnGap: '4rem',
        rowGap: '3rem',
        marginBottom: '1rem',

        '@sm': { flexDirection: 'row' },

        '> a': {
          width: 200,
        },

        '.contact-person': {
          display: 'flex',
          columnGap: '0.5rem',
          alignItems: 'center',
          color: '$primary900',
          fontWeight: 500,

          span: {
            display: 'block',
            color: '$subtext',
            fontWeight: 400,
            fontSize: '$small',
          },
        },
      },
    },
  },
});

export const ContactSection: React.FC = () => {
  const contactProfiles = useMemo(() => {
    return socialProfiles.filter(profile =>
      ['LinkedIn', 'Email'].includes(profile.label)
    );
  }, []);

  return (
    <ContactSectionSection id="contact-section">
      <ContentWrapper>
        <div className="contact-content">
          <h3 className="title">Looking for a partner to work with?</h3>
          <p className="subtitle">
            Feel free to reach out to me at any time – for a project, a
            question, or just a nice chat.
          </p>
        </div>
        <div className="contact-details">
          <div className="contact-button">
            <Button
              as="link"
              to="mailto:mail@konstantin.digital"
              ariaLabel="Contact me"
              colors={{
                bg: 'primary250',
                bgHover: 'pinky',
                text: 'background',
              }}
            >
              Get In Touch
            </Button>
            <div className="contact-person">
              <Avatar size={48} />{' '}
              <div className="contact-person-name">
                Konstantin Münster <span>Open for freelance work</span>
              </div>
            </div>
          </div>
          <SocialProfiles profiles={contactProfiles} />
        </div>
      </ContentWrapper>
    </ContactSectionSection>
  );
};
