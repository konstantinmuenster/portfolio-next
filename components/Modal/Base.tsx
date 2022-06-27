import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import type { StyledComponent } from '@stitches/react/types/styled-component';
import { styled } from '@config/stitches.config';
import { Icon } from '@components/Icon';

const StyledDialog = styled(Dialog, {
  position: 'fixed',
  zIndex: 999,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  width: '100%',
  height: '100%',

  '.exit-animation': { transition: 'all ease-in 200ms' },
  '.enter-animation': { transition: 'all ease-out 300ms' },
  '.opacity-animation-start': { opacity: 0 },
  '.opacity-animation-end': { opacity: 1 },
  '.scale-animation-start': { transform: 'scale(0.95)' },
  '.scale-animation-end': { transform: 'scale(1)' },

  '.modal-backdrop': {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: 'black',
    opacity: 0.4,
  },

  '.modal-wrapper': {
    position: 'fixed',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '80%',

    '.close-modal-button': {
      position: 'absolute',
      top: 8,
      right: 8,
      color: '$subtext',
      transition: '$default',

      '&:hover': { color: '$primary900' },
    },

    '.modal-panel': {
      width: '95%',
      maxWidth: '30rem',
      padding: '2rem 2rem 2rem 1rem',
      overflow: 'hidden',
      background: '$background',
      borderRadius: '$default',
      accentBorderWithBg: '$colors$background',
      borderWidth: 5,
      boxShadow:
        '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',

      '@sm': { padding: '2rem 3rem 2rem 2rem' },
    },
  },
}) as unknown as typeof Dialog & StyledComponent;

export type ModalProps = {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
  title?: string;
};

export const Modal: React.FC<ModalProps> = props => {
  return (
    <Transition appear show={props.isOpen} as={Fragment}>
      <StyledDialog open={props.isOpen} onClose={() => props.setIsOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="enter-animation"
          enterFrom="opacity-animation-start"
          enterTo="opacity-animation-end"
          leave="exit-animation"
          leaveFrom="opacity-animation-end"
          leaveTo="opacity-animation-start"
        >
          <div className="modal-backdrop" />
        </Transition.Child>
        <div className="modal-wrapper">
          <Transition.Child
            as={Fragment}
            enter="enter-animation"
            enterFrom="opacity-animation-start scale-animation-start"
            enterTo="opacity-animation-end scale-animation-end"
            leave="exit-animation"
            leaveFrom="opacity-animation-end scale-animation-start"
            leaveTo="opacity-animation-start scale-animation-end"
          >
            <Dialog.Panel className="modal-panel">
              <button
                className="close-modal-button"
                aria-label="Close Modal"
                onClick={() => props.setIsOpen(false)}
              >
                <Icon type="Close" title="Close Modal" size={32} />
              </button>
              {props.title ? (
                <Dialog.Title as="h4">{props.title}</Dialog.Title>
              ) : undefined}
              {props.children}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </StyledDialog>
    </Transition>
  );
};
