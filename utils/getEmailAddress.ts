import { Profile } from '@config/profiles.config';

export const getEmailAddress = (profiles: Profile[]) =>
  profiles
    .find(({ label }) => label.toLowerCase() === 'email')
    ?.to.split('mailto:')
    .pop();
