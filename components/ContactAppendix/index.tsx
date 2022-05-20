import Image from 'next/image';

import { ContentWrapper } from '@components/Layout';
import { SparkSvg } from '@components/TextDecoration/SparkSvg';
import { styled } from '@config/stitches.config';
import { avatarSrc } from '@config/profiles.config';

const StyledContactAppendix = styled('div', {
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

    svg: {
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
    paddingRight: '3rem',
    py: '0.75rem',
    borderRadius: '$default',

    img: { borderRadius: '$round' },

    '.contact-name': {
      display: 'block',
      fontWeight: 500,
    },

    '.contact-email': {
      fontSize: '$small',
    },
  },
});

export const ContactAppendix: React.FC = () => {
  return (
    <StyledContactAppendix>
      <ContentWrapper>
        <SparkSvg aria-hidden={true} />
        <div className="need-help">
          <h5>Need help or advice?</h5>
          <p>
            Or just want to have a nice chat? Either way, feel free to contact
            me!
          </p>
        </div>
        <div className="contact-me">
          <Image
            src={avatarSrc}
            height={40}
            width={40}
            alt="Konstantin Münster Avatar"
          />
          <div className="contact-details">
            <span className="contact-name">Konstantin Münster</span>
            <span className="contact-email">mail@konstantin.digital</span>
          </div>
        </div>
      </ContentWrapper>
    </StyledContactAppendix>
  );
};
