import { ReactElement } from 'react';

import { styled } from '@config/stitches.config';
import { socialProfiles } from '@config/profiles.config';
import { Link } from '@components/Link';
import { Toast } from '@components/Toast';
import { TwitterSvg } from '@components/Icon/Twitter';

const StyledLink = styled(Link, {
  verticalAlign: 'middle',
  transition: '$default',

  '&:hover': { filter: 'brightness(104%)' },

  span: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#1D9BF0',
    backgroundColor: '$secondary50 !important',
    '@dark': { backgroundColor: 'rgba(98, 64, 231, 0.15)' },
  },

  svg: {
    size: 18,
    color: '#1D9BF0',
    marginRight: '4px',
  },
});

export const TwitterChip = (): ReactElement => {
  const profile = socialProfiles.find(({ to }) => to.includes('twitter'));
  if (!profile) return <></>;

  const name = profile.to.split('twitter.com/').pop();

  return (
    <StyledLink to={profile.to} hideExternalHint>
      <Toast>
        <TwitterSvg />
        {name}
      </Toast>
    </StyledLink>
  );
};
