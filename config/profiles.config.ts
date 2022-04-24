import type { StyledIcon } from '@styled-icons/styled-icon';
import { SocialLinkedin, SocialGithub } from '@styled-icons/foundation';

export type Profile = {
  to: string;
  label: string;
  icon?: StyledIcon;
};

export const socialProfiles: Profile[] = [
  {
    to: 'https://www.linkedin.com/in/konstantin-muenster/',
    label: 'LinkedIn',
    icon: SocialLinkedin,
  },
  {
    to: 'https://github.com/konstantinmuenster/',
    label: 'Github',
    icon: SocialGithub,
  },
  {
    to: 'mailto:mail@konstantin.digital',
    label: 'Email',
  },
];

export const avatarSrc = '/images/avatar.jpg';
