import { Menu } from '@headlessui/react';

import type { NavigationItem } from '@config/navigation.config';
import { styled } from '@config/stitches.config';
import { Link } from '@components/Link';

import { BAR_HEIGHT, BAR_MARGIN } from './HamburgerButton';

const StyledMenuItems = styled(Menu.Items, {
  position: 'absolute',
  right: 0,
  top: (BAR_HEIGHT + BAR_MARGIN * 2) * 3 + 30,
  transformOrigin: 'top right',
  width: '14rem',
  marginTop: '1.5rem',
  backgroundColor: '$surface250',
  px: '0.5rem',
  py: '0.5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  borderRadius: '$default',

  a: {
    display: 'block',
    width: '100%',
    py: '1.5rem',
    my: '0.25rem',
    px: '1rem',
    borderRadius: '$default',

    '&[data-focused="true"]': {
      backgroundColor: '$background',
    },
  },
});

export const MenuItems: React.FC<{ items: NavigationItem[] }> = props => (
  <StyledMenuItems>
    {props.items.map((item, i) => {
      return (
        <Menu.Item key={i}>
          {({ active }) => (
            <Link {...item} data-focused={active}>
              {item.label}
            </Link>
          )}
        </Menu.Item>
      );
    })}
  </StyledMenuItems>
);
