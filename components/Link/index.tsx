import NextLink from 'next/link';
import { ComponentPropsWithoutRef } from 'react';
import { useRouter } from 'next/router';

import { ExternalLink } from './ExternalLink';

export type LinkProps = ComponentPropsWithoutRef<'a'> & {
  to: string;
};

export const Link: React.FC<LinkProps> = ({ to, ...props }) => {
  const router = useRouter();
  const label = typeof props.children === 'string' ? props.children : to;
  const isExternal = isExternalLink(to);

  const linkProps = {
    'aria-label': `Go to ${label} page`,
    'aria-current': router.pathname === to ? ('page' as const) : undefined,
    ...props,
  };

  if (isExternal)
    return (
      <ExternalLink to={to} {...linkProps}>
        {props.children}
      </ExternalLink>
    );

  return (
    <NextLink href={to}>
      <a {...linkProps}>{props.children}</a>
    </NextLink>
  );
};

const isExternalLink = (link: string) =>
  /(?:^[a-z][a-z0-9+\.-]*:|\/\/)/.test(link);
