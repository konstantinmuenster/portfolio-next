import { useMemo, useState } from 'react';

import { ContentWrapper } from '@components/Layout';
import { SparkSvg } from '@components/TextDecoration/SparkSvg';
import { Avatar } from '@components/Avatar';
import { styled } from '@config/stitches.config';
import { socialProfiles } from '@config/profiles.config';

const StyledContactCard = styled('div', {
  '> div': {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    rowGap: '2rem',
    py: '2rem',
    px: '1rem',
    background: '$secondary50',
    borderRadius: '$default',
    marginBottom: '2rem',

    '@md': {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      columnGap: '2rem',
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

  '.contact-me': {
    display: 'flex',
    columnGap: '0.5rem',
    background: '$primary50',
    paddingLeft: '1rem',
    paddingRight: '2rem',
    py: '0.75rem',
    borderRadius: '$default',

    '.contact-name': {
      display: 'block',
      fontWeight: 500,
      color: '$primary900',
    },

    '.contact-email': {
      button: {
        fontSize: '$mini',
        fontWeight: 500,
        color: '$secondary900',
        transition: '$default',
        width: '100%',

        '&:hover': { color: '$secondary500' },
      },
    },
  },
});

export const ContactCard: React.FC = () => {
  const [isHoveringCopy, setIsHoveringCopy] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const email = useMemo(() => {
    return socialProfiles
      .find(({ label }) => label.toLowerCase() === 'email')
      ?.to.split('mailto:')
      .pop();
  }, []);

  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(email ?? '');
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  const setHoveringState = (value: boolean) => {
    setTimeout(() => {
      if (value === true && !isHoveringCopy) {
        setIsHoveringCopy(true);
      } else if (value === false && isHoveringCopy) {
        setIsHoveringCopy(false);
      }
    }, 100);
  };

  const buttonLabel = isCopied
    ? 'Copied!'
    : isHoveringCopy
    ? 'Copy Email Address'
    : email;

  return (
    <StyledContactCard>
      <ContentWrapper>
        <SparkSvg aria-hidden={true} data-text-decoration />
        <div className="need-help">
          <h5>Need help or advice?</h5>
          <p>
            Or just want to have a nice chat? Either way, feel free to contact
            me!
          </p>
        </div>
        <div className="contact-me">
          <Avatar size={40} />
          <div className="contact-details">
            <span className="contact-name">Konstantin Münster</span>
            <div className="contact-email">
              <button
                onClick={handleCopyClick}
                onMouseEnter={() => setHoveringState(true)}
                onMouseLeave={() => setHoveringState(false)}
                disabled={isCopied}
                aria-label={buttonLabel}
              >
                {buttonLabel}
              </button>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </StyledContactCard>
  );
};
