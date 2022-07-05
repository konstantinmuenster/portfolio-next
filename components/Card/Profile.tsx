import { styled } from '@config/stitches.config';

import { Button } from '@components/Button';
import { SocialProfiles } from '@components/SocialProfiles';
import { Avatar } from '@components/Avatar';

const StyledProfileCard = styled('div', {
  width: '100%',
  maxWidth: '37.5rem',

  '.profile-card': {
    px: '1.5rem',
    py: '1.25rem',
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
      '@md': { display: 'flex' },
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
  className?: string;
};

export const ProfileCard: React.FC<ProfileCardProps> = props => {
  return (
    <StyledProfileCard accent={props.accent} className={props.className}>
      <div className="profile-card">
        <div className="profile-details">
          <Avatar size={60} />
          <div>
            <span className="name">Konstantin Münster</span>
            <span className="role">Web & Product Developer</span>
          </div>
        </div>
        <Button as="link" to="/services" colors={{ bgHover: 'secondary100' }}>
          Get to know me
        </Button>
      </div>
      <SocialProfiles className="profile-socials" />
    </StyledProfileCard>
  );
};
