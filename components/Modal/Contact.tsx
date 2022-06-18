import { Link } from '@components/Link';
import { socialProfiles } from '@config/profiles.config';
import { styled } from '@config/stitches.config';
import { getEmailAddress } from '@utils/getEmailAddress';
import { useMemo, useState } from 'react';
import { Modal, ModalProps } from './Base';

const StyledContactModalContent = styled('div', {
  marginTop: '0.5rem',
  color: '$subtext',

  '.contact-email': {
    my: '1.5rem',

    '.email-address': {
      display: 'inline-block',
      fontFamily: '$serif',
      fontSize: '1.3rem',
      borderBottom: '3px solid $secondary50',
      color: '$primary900',
    },

    '.email-actions': {
      display: 'flex',
      columnGap: '0.75rem',
      marginTop: '0.25rem',

      'button, a, span': {
        display: 'block',
        fontSize: '$small',
        lineHeight: '$small',
        fontWeight: 500,

        '&:hover': { color: '$primary900' },
      },
    },
  },
});

export const ContactModal: React.FC<Omit<ModalProps, 'title'>> = props => {
  const [isCopied, setIsCopied] = useState(false);

  const email = useMemo(() => {
    return getEmailAddress(socialProfiles);
  }, []);

  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(email ?? '');
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <Modal {...props} title="Awesome!">
      <StyledContactModalContent>
        <p>Let&apos;s connect! I am excited to hear from you.</p>
        {email ? (
          <div className="contact-email">
            <div className="email-address">{email}</div>
            <div className="email-actions">
              <Link to={`mailto:${email}`} hideExternalHint>
                Compose
              </Link>
              <span>–</span>
              <button onClick={handleCopyClick}>
                {isCopied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        ) : undefined}
        <p>I aim to get back to you within 24 hours.</p>
        <p>See you in a bit, Konstantin 👋</p>
      </StyledContactModalContent>
    </Modal>
  );
};
