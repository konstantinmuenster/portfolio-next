import { styled } from '@config/stitches.config';

const StyledToast = styled('span', {
  display: 'inline-block',
  px: '0.375rem',
  py: '0.25rem',
  borderRadius: '$less',

  fontWeight: 500,
  fontSize: '$mini',
  lineHeight: '$mini',

  variants: {
    color: {
      blue: {
        color: '#2763C9',
        background: 'rgba(39, 99, 201, 0.15)',
      },
      purple: {
        color: '#6240E7',
        background: 'rgba(98, 64, 231, 0.15)',
      },
      green: {
        color: '#469A8F',
        background: 'rgba(99, 188, 176, 0.15)',
      },
      secondary: {
        color: '$secondary500',
        background: '$secondary50',
      },
    },
  },
});

type ToastProps = {
  color?: 'blue' | 'purple' | 'green' | 'secondary';
};

export const Toast: React.FC<ToastProps> = props => {
  return (
    <StyledToast color={props.color ?? 'purple'}>{props.children}</StyledToast>
  );
};
