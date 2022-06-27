import { ReactElement, ReactNode } from 'react';

import { Disclosure, Transition } from '@headlessui/react';

import { styled } from '@config/stitches.config';
import { Icon } from '@components/Icon';

const StyledDisclosure = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  button: {
    alignSelf: 'flex-end',
    px: '0.5rem',
    py: '0.25rem',
    transition: '$default',
    borderRadius: '$less',

    '&:hover': { background: 'black' },
  },

  '.transition': { transition: 'all 100ms ease' },
  '.from': { transform: 'scale(0.95)', opacity: 0 },
  '.to': { transform: 'scale(1)', opacity: 1 },

  '[id^="headlessui-disclosure-panel"]': { marginTop: '1rem' },
});

type CodeProps = {
  children?: ReactNode;
  id?: string;
  collapsible?: boolean;
};

export const Code = (props: CodeProps): ReactElement => {
  const isCollapsible = typeof props.collapsible !== 'undefined';

  const content = (
    <code
      data-inline-code={!Array.isArray(props.children) ? 'true' : undefined}
      data-code-block={Array.isArray(props.children) ? 'true' : undefined}
      id={props.id}
    >
      {props.children}
    </code>
  );

  if (!isCollapsible) return content;

  return (
    <StyledDisclosure>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button>
              <span>{open ? 'Hide' : 'Show'} code</span>
              <Icon
                type="ChevronRight"
                size={20}
                style={open ? { transform: 'rotate(90deg)' } : undefined}
              />
            </Disclosure.Button>
            <Transition
              enter="transition"
              enterFrom="from"
              enterTo="to"
              leave="transition"
              leaveFrom="to"
              leaveTo="from"
            >
              <Disclosure.Panel>{content}</Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </StyledDisclosure>
  );
};
