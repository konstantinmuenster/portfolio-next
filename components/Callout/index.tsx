import { styled } from '@config/stitches.config';
import { ReactElement, ReactNode } from 'react';

const StyledCallout = styled('div', {
  background: '$secondary50',
  padding: '1rem',
  borderRadius: '$default',
  my: '2rem',
  p: {
    fontWeight: '500',
    whiteSpace: 'initial',
  },
});

type CalloutProps = {
  children?: ReactNode;
};

export const Callout = (props: CalloutProps): ReactElement => {
  return <StyledCallout>{props.children}</StyledCallout>;
};
