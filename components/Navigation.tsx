import Link from 'next/link';
import { useRouter } from 'next/router';

import { styled } from '@config/stitches.config';
import { normalizeName } from '@utils/normalizeName';

import { VisuallyHidden } from './VisuallyHidden';
import { Box } from './Box';
import { useEffect } from 'react';

const StyledNavigation = styled(Box, {
  variants: {
    orientation: {
      horizontal: {
        '> ul': {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          height: '100%',
        },
        a: {
          display: 'inline-block',
          padding: '0.5rem 1rem',
          marginLeft: '2rem',
        },
      },
      vertical: {
        '> ul': {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        },
        a: {
          display: 'inline-block',
          padding: '2rem $pagePadding',
          fontSize: '2rem',
        }
      },
    },
  },
});

export type NavigationItem = {
  to: string;
  label: string;
  external?: boolean;
};

const NavigationItem = ({ item }: { item: NavigationItem }) => {
  const router = useRouter();

  const ariaProps = {
    'aria-label': `Go to ${item.label} page`,
    'aria-current': router.pathname === item.to ? ('page' as const) : undefined,
  };

  const WrappedLink = item.external ? (
    <a href={item.to} rel="noopener noreferrer" {...ariaProps}>
      {item.label}
    </a>
  ) : (
    <Link href={item.to} passHref>
      <a {...ariaProps}>{item.label}</a>
    </Link>
  );

  return <li>{WrappedLink}</li>;
};

export type NavigationProps = {
  name: string;
  items: NavigationItem[];
  orientation?: 'horizontal' | 'vertical';
  as?: 'nav' | 'div';
  setHtmlId?: boolean;
};

export const Navigation = ({
  name,
  items,
  orientation,
  setHtmlId,
  as,
}: NavigationProps) => {
  const htmlName = normalizeName(name);
  return (
    <StyledNavigation
      id={setHtmlId !== false ? htmlName : undefined}
      as={as ?? 'nav'}
      role={!as || as === 'nav' ? 'navigation' : undefined}
      aria-labelledby={`${htmlName}-label`}
      orientation={orientation ?? 'horizontal'}
    >
      <VisuallyHidden id={`${htmlName}-label`}>{name}</VisuallyHidden>
      <ul className="reset">
        {items.map((item, key) => {
          return <NavigationItem key={key} item={item} />;
        })}
      </ul>
    </StyledNavigation>
  );
};
