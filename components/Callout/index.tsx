import { styled } from '@config/stitches.config';
import { ReactElement, ReactNode } from 'react';

const StyledCallout = styled('div', {
  background: '$secondary50',
  padding: '1rem',
  borderRadius: '$default',
  p: { whiteSpace: 'initial' },
  variants: {
    variant: {
      secondary: {
        background: '$secondary50',
        my: '2rem',
        p: { fontWeight: '500' },
      },
      tertiary: {
        background: '$surface50',
        my: '1rem',
      },
    },
  },
});

type CalloutProps = {
  children?: ReactNode;
  variant?: 'secondary' | 'tertiary';
};

export const Callout = (props: CalloutProps): ReactElement => {
  return (
    <StyledCallout variant={props.variant ?? 'secondary'}>
      {props.children}
    </StyledCallout>
  );
};
