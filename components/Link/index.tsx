import NextLink from 'next/link';
import { ComponentPropsWithoutRef } from 'react';
import { useRouter } from 'next/router';
import { DiagonalArrowRightUp as ArrowRightUp } from '@styled-icons/evaicons-solid';

import { styled } from '@config/stitches.config';

const isExternalLink = (link: string) =>
  /(?:^[a-z][a-z0-9+\.-]*:|\/\/)/.test(link);

const StyledExternalLink = styled('a', {
  position: 'relative',
  paddingRight: '10px',

  'svg[data-external-hint]': {
    display: 'block',
    position: 'absolute',
    top: 0,
    right: 0,
    size: '14px',
  },
});

export type LinkProps = ComponentPropsWithoutRef<'a'> & {
  to: string;
};

export const Link: React.FC<LinkProps> = ({ to, ...props }) => {
  const router = useRouter();

  const label = typeof props.children === 'string' ? props.children : to;
  const isExternal = isExternalLink(to);
  const ariaProps = {
    'aria-label': `Go to ${label} page`,
    'aria-current': router.pathname === to ? ('page' as const) : undefined,
  };

  return isExternal ? (
    <StyledExternalLink
      href={to}
      rel="noopener noreferrer"
      target="_blank"
      {...ariaProps}
      {...props}
    >
      {props.children} <ArrowRightUp data-external-hint aria-hidden="true" />
    </StyledExternalLink>
  ) : (
    <NextLink href={to}>
      <a {...ariaProps} {...props}>
        {props.children}
      </a>
    </NextLink>
  );
};
