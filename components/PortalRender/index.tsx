import { useState, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';

type PortalRenderType = { wrapperId?: string };

export const PortalRender: React.FC<PortalRenderType> = props => {
  const wrapperId = props.wrapperId ?? 'react-portal-render';
  const [wrapperElement, setWrapperElement] = useState<HTMLElement>();

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let hasBeenCreated = false;

    if (!element) {
      hasBeenCreated = true;
      element = createAndAppendWrapper(wrapperId);
    }

    setWrapperElement(element);

    return () => {
      if (hasBeenCreated && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  return wrapperElement ? createPortal(props.children, wrapperElement) : null;
};

const createAndAppendWrapper = (id: string) => {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', id);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
};
