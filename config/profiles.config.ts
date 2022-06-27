import type { StyledIcon } from '@styled-icons/styled-icon';
import { SocialLinkedin, SocialGithub } from '@styled-icons/foundation';
import { Medium } from '@styled-icons/boxicons-logos';

export type Profile = {
  to: string;
  label: string;
  icon?: StyledIcon;
};

export const TwitterHandle = '@konstantinmnstr';

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
    to: 'https://medium.com/@konstantinmuenster',
    label: 'Medium',
    icon: Medium,
  },
  {
    to: 'mailto:mail@konstantin.digital',
    label: 'Email',
  },
];
