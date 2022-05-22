import { Menu } from '@headlessui/react';

import { NavigationItem } from '@config/navigation.config';
import { styled } from '@config/stitches.config';
import { normalizeName } from '@utils/normalizeName';

import { MenuItems } from './MenuItems';
import { HamburgerButton } from './HamburgerButton';

const StyledDropdownMenu = styled('nav', {
  position: 'relative',
});

type DropdownMenuProps = {
  name: string;
  items: NavigationItem[];
};

export const DropdownMenu: React.FC<DropdownMenuProps> = props => {
  const htmlName = normalizeName(props.name);

  return (
    <StyledDropdownMenu id={htmlName} role="navigation">
      <Menu>
        {({ open }) => (
          <>
            <HamburgerButton open={open} />
            <MenuItems items={props.items} />
          </>
        )}
      </Menu>
    </StyledDropdownMenu>
  );
};
