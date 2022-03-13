import { ComponentProps } from '@stitches/react';

import { Box } from './Box';

export const VisuallyHidden: React.FC<ComponentProps<typeof Box>> = ({
  children,
  ...props
}) => {
  return (
    <Box as="span" className="visually-hidden" {...props}>
      {children}
    </Box>
  );
};
