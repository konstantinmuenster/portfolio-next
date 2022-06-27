import { Profile, socialProfiles } from '@config/profiles.config';
import { styled } from '@config/stitches.config';

import { Link } from '@components/Link';

const StyledSocialProfiles = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  a: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    padding: '0.125rem',
    marginRight: '1.5rem',
    borderRadius: '$less',

    fontSize: '$mini',
    lineHeight: '1.5rem',

    '@sm': { marginRight: '1rem' },

    '&:last-of-type': {
      marginRight: '0.5rem',
      '@sm': { marginRight: '1rem' },
    },
  },

  variants: {
    alignment: {
      right: {
        justifyContent: 'flex-end',
        '@md': { justifyContent: 'flex-start' },
      },
      left: {
        justifyContent: 'flex-start',
      },
    },
  },
});

type SocialProfilesProps = {
  profiles?: Profile[];
  className?: string;
  alignment?: 'left' | 'right';
};

export const SocialProfiles: React.FC<SocialProfilesProps> = props => {
  const align = props.alignment ?? 'left';
  const profiles = props.profiles ?? socialProfiles;

  return (
    <StyledSocialProfiles className={props.className} alignment={align}>
      {profiles.map(({ icon: Icon, label, to }, key) => {
        return (
          <Link key={key} to={to} hideExternalHint>
            {Icon ? <Icon title={label} size={24} /> : `Open ${label}`}
          </Link>
        );
      })}
    </StyledSocialProfiles>
  );
};
