import { Profile } from '@config/profiles.config';
import { styled } from '@config/stitches.config';

import { Link } from '@components/Link';

const StyledSocialProfiles = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',

  '@md': { justifyContent: 'flex-start' },

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

    'svg[data-external-hint]': {
      display: 'none',
    },
  },
});

type SocialProfilesProps = {
  profiles: Profile[];
};

export const SocialProfiles: React.FC<SocialProfilesProps> = props => {
  return (
    <StyledSocialProfiles>
      {props.profiles.map(({ icon: Icon, label, to }, key) => {
        return (
          <Link key={key} to={to}>
            {Icon ? <Icon title={label} size={24} /> : `Open ${label}`}
          </Link>
        );
      })}
    </StyledSocialProfiles>
  );
};
