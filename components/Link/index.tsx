import NextLink from 'next/link';
import { ComponentPropsWithRef, forwardRef } from 'react';
import { useRouter } from 'next/router';

export type LinkProps = ComponentPropsWithRef<'a'> & {
  to: string;
  hideExternalHint?: boolean;
};

export const Link: React.FC<LinkProps> = forwardRef(
  ({ to, hideExternalHint, ...props }, ref) => {
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
        <a
          ref={ref}
          href={to}
          rel="nofollow noopener noreferrer"
          target="_blank"
          data-hide-external-hint={hideExternalHint}
          {...linkProps}
        >
          {props.children}
        </a>
      );

    return (
      <NextLink href={to}>
        <a ref={ref} {...linkProps}>
          {props.children}
        </a>
      </NextLink>
    );
  }
);

Link.displayName = 'Link';

const isExternalLink = (link: string) =>
  /(?:^[a-z][a-z0-9+\.-]*:|\/\/)/.test(link);
