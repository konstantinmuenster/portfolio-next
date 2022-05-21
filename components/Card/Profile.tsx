import Image from 'next/image';

import { styled } from '@config/stitches.config';
import { avatarSrc, socialProfiles } from '@config/profiles.config';

import { Button } from '@components/Button';
import { SocialProfiles } from '@components/SocialProfiles';

const StyledProfileCard = styled('div', {
  width: '100%',
  maxWidth: '37.5rem',

  '.profile-card': {
    px: '1.5rem',
    py: '1.5rem',
    borderRadius: '$default',
    backgroundColor: '$surface100',
    border: '2px solid $surface250',
    textAlign: 'left',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    '.profile-details': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      columnGap: '0.875rem',

      img: {
        borderRadius: '$round',
      },

      '.name': {
        fontSize: '$big',
        lineHeight: '$default',
        fontWeight: 500,
        color: '$primary900',
      },

      '.role': {
        display: 'block',
        fontSize: '$small',
      },
    },

    a: {
      display: 'none',
      '@md': { display: 'block' },
    },
  },

  '.profile-socials': {
    marginTop: '0.5rem',
    mx: '1rem',
  },

  variants: {
    accent: {
      true: {
        '.profile-card': {
          accentBorderWithBg: '$colors$surface100',
        },
      },
    },
  },
});

type ProfileCardProps = {
  accent?: boolean;
};

export const ProfileCard: React.FC<ProfileCardProps> = props => {
  return (
    <StyledProfileCard accent={props.accent}>
      <div className="profile-card">
        <div className="profile-details">
          <Image
            src={avatarSrc}
            height={60}
            width={60}
            alt="Konstantin Münster Avatar"
          />
          <div>
            <span className="name">Konstantin Münster</span>
            <span className="role">Product Developer</span>
          </div>
        </div>
        <Button as="link" to="/contact" colors={{ bgHover: 'secondary100' }}>
          Get to know me
        </Button>
      </div>
      <SocialProfiles profiles={socialProfiles} className="profile-socials" />
    </StyledProfileCard>
  );
};
