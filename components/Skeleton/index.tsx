import { styled, keyframes } from '@config/stitches.config';

const shimmerAnimation = keyframes({
  '100%': { transform: 'translateX(100%)' },
});

const StyledSkeleton = styled('div', {
  position: 'relative',
  display: 'inline-block',
  background: '$secondary100',
  borderRadius: '2px',
  overflow: 'hidden',

  '&::after': {
    content: '',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    transform: 'translateX(-100%)',
    linearGradient:
      '90deg, transparent 0%, $secondary50 20%, $secondary100 60%, transparent 100%',
    animation: `${shimmerAnimation} 2000ms infinite`,
  },
});

type SkeletonProps = {
  width: number;
  height: number;
};

export const Skeleton: React.FC<SkeletonProps> = props => {
  return <StyledSkeleton style={{ ...props }} />;
};
