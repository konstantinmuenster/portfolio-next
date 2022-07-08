import { Menu, Transition } from '@headlessui/react';

import { NavigationItem } from '@config/navigation.config';
import { styled } from '@config/stitches.config';
import { normalizeName } from '@utils/normalizeName';

import { MenuItems } from './MenuItems';
import { HamburgerButton } from './HamburgerButton';

const StyledDropdownMenu = styled('nav', {
  position: 'relative',

  '.enter-animation': { transition: 'all ease-in 100ms' },
  '.exit-animation': { transition: 'all ease-out 75ms' },
  '.opacity-animation-start': { opacity: 0 },
  '.opacity-animation-end': { opacity: 1 },
  '.scale-animation-start': { transform: 'scale(0.95)' },
  '.scale-animation-end': { transform: 'scale(1)' },

  '*:focus': { outline: 0 },
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
            <Transition
              enter="enter-animation"
              enterFrom="opacity-animation-start scale-animation-start"
              enterTo="opacity-animation-end scale-animation-end"
              leave="exit-animation"
              leaveFrom="opacity-animation-end scale-animation-end"
              leaveTo="opacity-animation-start scale-animation-start"
            >
              <MenuItems items={props.items} />
            </Transition>
          </>
        )}
      </Menu>
    </StyledDropdownMenu>
  );
};
