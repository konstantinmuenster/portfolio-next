import { useState } from 'react';

import { styled } from '@config/stitches.config';

const StyledTooltip = styled('div', {
  position: 'relative',
  display: 'inline-block',

  '.tooltip-tip': {
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

type TooltipProps = {
  content: string;
};

export const Tooltip: React.FC<TooltipProps> = props => {
  let timeout: NodeJS.Timeout | undefined;
  const [isShown, setIsShown] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setIsShown(true);
    }, 200);
  };

  const hideTip = () => {
    if (timeout) clearInterval(timeout);
    setIsShown(false);
  };

  return (
    <StyledTooltip onMouseEnter={showTip} onMouseLeave={hideTip}>
      {props.children}
      {isShown ? <div className="tooltip-tip">{props.content}</div> : undefined}
    </StyledTooltip>
  );
};
