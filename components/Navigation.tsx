import Link from 'next/link';
import { useRouter } from 'next/router';

import { styled } from '@config/stitches.config';

import { VisuallyHidden } from './VisuallyHidden';

const StyledNavigation = styled('nav', {
  '> ul': {
    display: 'flex',
  },
  'a': {
    padding: '0.5rem 1rem',
    marginLeft: '2rem',
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
    ariaLabel: `Go to ${item.label} page`,
    ariaCurrent: router.pathname === item.to ? ('page' as const) : undefined,
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

export const Navigation = ({
  items,
  orientation,
}: {
  items: NavigationItem[];
  orientation?: 'horizontal' | 'vertical';
}) => {
  return (
    <StyledNavigation
      aria-labelledby="mainMenuLabel"
      aria-orientation={orientation}
    >
      <VisuallyHidden id="mainMenuLabel">Main Menu</VisuallyHidden>
      <ul className="reset">
        {items.map((item, key) => {
          return <NavigationItem key={key} item={item} />;
        })}
      </ul>
    </StyledNavigation>
  );
};
