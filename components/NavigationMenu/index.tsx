import type { NavigationItem } from '@config/navigation.config';
import { styled } from '@config/stitches.config';
import { normalizeName } from '@utils/normalizeName';

import { VisuallyHidden } from '../VisuallyHidden';
import { Link } from '../Link';

const StyledNavigation = styled('nav', {
  '> ul': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: '100%',

    '@sm': {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
  },

  a: {
    display: 'inline-block',
    padding: '1rem',
    marginLeft: '2rem',
    borderRadius: '$less',

    '@sm': {
      padding: '0.5rem 1rem',
    },
  },

  variants: {
    location: {
      header: {
        a: {
          '&:hover, &:focus-visible, &:active': {
            backgroundColor: '$surface50',
            color: '$primary900',
          },

          '& svg[data-external-hint]': {
            top: 6,
            right: 4,
          },
        },
      },
      footer: {
        a: {
          fontWeight: 'normal',
          fontSize: '16px',

          '& svg[data-external-hint]': {
            top: 6,
            right: 4,
          },
        },
      },
    },
  },
});

export type NavigationMenuProps = {
  name: string;
  items: NavigationItem[];
  location?: 'header' | 'footer';
};

export const NavigationMenu: React.FC<NavigationMenuProps> = props => {
  const htmlName = normalizeName(props.name);

  return (
    <StyledNavigation
      id={htmlName}
      role="navigation"
      aria-labelledby={`${htmlName}-label`}
      location={props.location ?? 'header'}
    >
      <VisuallyHidden id={`${htmlName}-label`}>{props.name}</VisuallyHidden>
      <ul className="reset">
        {props.items.map((item, key) => {
          return (
            <li key={key}>
              <Link {...item}>{item.label}</Link>
            </li>
          );
        })}
      </ul>
    </StyledNavigation>
  );
};
