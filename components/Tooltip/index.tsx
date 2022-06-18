import {
  forwardRef,
  MouseEvent,
  ReactNode,
  Ref,
  useImperativeHandle,
  useState,
} from 'react';

import { styled } from '@config/stitches.config';

const StyledTooltip = styled('div', {
  position: 'relative',
  display: 'inline-block',

  '.tooltip-tip': {
    display: 'none',
    position: 'absolute',
    zIndex: 100,
    top: -35,
    left: '50%',
    borderRadius: '$less',
    padding: '0.25rem',
    transform: 'translateX(-50%)',
    transition: '$default',
    color: '$subtext',
    background: '$surface100',
    fontSize: '$mini',
    lineHeight: '$mini',
    whiteSpace: 'nowrap',

    '@lg': { display: 'block' },

    '&:before': {
      position: 'absolute',
      content: ' ',
      top: '100%',
      left: '50%',
      border: '6px solid transparent',
      borderTopColor: '$surface100',
      marginLeft: '-6px',
      height: 0,
      width: 0,
      pointerEvents: 'none',
    },
  },
});

export type TooltipRef = {
  hideTooltip: () => void;
};

type TooltipProps = {
  content: string;
  children?: ReactNode;
};

export const Tooltip = forwardRef<TooltipRef, TooltipProps>((props, ref) => {
  let timeout: NodeJS.Timeout | undefined;
  const [isShown, setIsShown] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      hideTooltip: () => {
        setIsShown(false);
      },
    };
  });

  const showTip = (e: MouseEvent) => {
    const isMouseDown = e.buttons == 1 || e.buttons == 3;
    if (isMouseDown) return;
    timeout = setTimeout(() => {
      setIsShown(true);
    }, 200);
  };

  const hideTip = () => {
    if (timeout) clearInterval(timeout);
    setIsShown(false);
  };

  return (
    <StyledTooltip
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
      ref={ref as Ref<HTMLDivElement>}
    >
      {props.children}
      {isShown ? <div className="tooltip-tip">{props.content}</div> : undefined}
    </StyledTooltip>
  );
});

Tooltip.displayName = 'Tooltip';
