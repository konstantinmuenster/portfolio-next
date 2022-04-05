import { styled } from '@config/stitches.config';
import { ComponentPropsWithoutRef } from 'react';

// https://www.a11yproject.com/posts/how-to-hide-content/
const StyledVisuallyHidden = styled('span', {
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: '1px',
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px',
});

export const VisuallyHidden: React.FC<ComponentPropsWithoutRef<'span'>> = ({
  children,
  ...props
}) => {
  return <StyledVisuallyHidden {...props}>{children}</StyledVisuallyHidden>;
};
