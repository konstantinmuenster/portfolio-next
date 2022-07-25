import { useMemo } from 'react';

import { styled } from '@config/stitches.config';
import { socialProfiles } from '@config/profiles.config';
import { ContentWrapper } from '@components/Layout';
import { SparkSvg } from '@components/TextDecoration/SparkSvg';
import { Avatar } from '@components/Avatar';
import { Link } from '@components/Link';
import { getEmailAddress } from '@utils/getEmailAddress';
import { useCurrentTimestamp } from '@utils/date/useCurrentTimestamp';

const StyledContactCard = styled('div', {
  marginBottom: '6rem',

  '.contact-card-wrapper': {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    rowGap: '2rem',
    py: '2rem',
    px: '1rem',
    background: '$secondary50',
    border: '1px solid $surface100',
    borderRadius: '$default',

    '@md': {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      columnGap: '4rem',
      rowGap: 'unset',
      px: '1.5rem',
    },

    '> svg': {
      display: 'none',
      position: 'absolute',
      top: -30,
      right: -20,
      transform: 'rotate(50deg)',
      '@lg': { display: 'block' },
    },
  },

  '.contact-card-content': {
    h5: { marginBottom: '0.5rem' },
  },

  '.contact-card-chat': {
    width: '100%',
    maxWidth: '240px',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '0.5rem',

    '.contact-card-chat-message': {
      width: '100%',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      columnGap: '0.5rem',
      background: '$secondary100',
      borderRadius: '$default',
      padding: '0.5rem',

      p: { fontSize: '$small', lineHeight: '$small' },

      '.timestamp': {
        position: 'absolute',
        bottom: 6,
        right: 8,
        fontSize: '$mini',
        lineHeight: '$mini',
        color: '$subtext',
      },
    },

    '.contact-card-email': {
      display: 'inline-block',
      py: '0.5rem',
      px: '1rem',
      background: '$primary250',
      transition: '$default',
      color: '$background',
      borderRadius: '$less',

      '&:hover': { background: '$pinky' },
    },
  },
});

export const ContactCard: React.FC = () => {
  const timestamp = useCurrentTimestamp();

  const email = useMemo(() => {
    return socialProfiles.find(({ to }) => to.includes('mailto:'));
  }, []);

  const linkedIn = useMemo(() => {
    return socialProfiles.find(({ label }) =>
      label.toLowerCase().includes('linkedin')
    );
  }, []);

  return (
    <StyledContactCard>
      <ContentWrapper>
        <div className="contact-card-wrapper">
          <SparkSvg aria-hidden={true} data-text-decoration />
          <div className="contact-card-content">
            <h5>Need help or advice?</h5>
            <p>
              Or just want to have a nice chat? Either way, feel free to contact
              me! You can reach me best by email or on{' '}
              <Link to={linkedIn?.to ?? ''}>LinkedIn</Link>.
            </p>
          </div>
          <div className="contact-card-chat">
            <div className="contact-card-chat-message">
              <Avatar size={24} />
              <p>Looking forward to it!</p>
              <span className="timestamp">{timestamp}</span>
            </div>
            <Link
              to={email?.to ?? ''}
              role="button"
              aria-label="Write an email"
              className="contact-card-email"
              hideExternalHint
            >
              {getEmailAddress(socialProfiles)}
            </Link>
          </div>
        </div>
      </ContentWrapper>
    </StyledContactCard>
  );
};
