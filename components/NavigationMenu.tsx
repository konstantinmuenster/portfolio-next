import type { NavigationItem } from '@config/navigation.config';
import { styled } from '@config/stitches.config';
import { normalizeName } from '@utils/normalizeName';

import { VisuallyHidden } from './VisuallyHidden';
import { Link } from './Link';

const StyledNavigation = styled('nav', {
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
    borderRadius: '$default',

    '&:hover, &:focus-visible, &:active': {
      backgroundColor: '$background',
    },

    '& svg[data-external-hint]': {
      top: 6,
      right: 4,
    },
  },
});

export type NavigationMenuProps = {
  name: string;
  items: NavigationItem[];
};

export const NavigationMenu: React.FC<NavigationMenuProps> = props => {
  const htmlName = normalizeName(props.name);

  return (
    <StyledNavigation
      id={htmlName}
      role="navigation"
      aria-labelledby={`${htmlName}-label`}
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
