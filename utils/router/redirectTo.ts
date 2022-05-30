import type { Redirect } from 'next';

export const redirectTo = (to: string): { redirect: Redirect } => ({
  redirect: {
    destination: to,
    permanent: false,
  },
});
