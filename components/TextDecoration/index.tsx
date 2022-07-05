import { styled } from '@config/stitches.config';
import { ArrowRightUpSvg } from '@components/Icon/ArrowRightUp';

import { SparkSvg } from './SparkSvg';
import { UnderlineSvg } from './UnderlineSvg';

export type TextDecorationSvgProps = { color?: string };

const StyledTextDecoration = styled('span', {
  position: 'relative',

  variants: {
    variant: {
      arrow: {
        svg: {
          size: 20,
          verticalAlign: 'sub',
          marginLeft: '0.25rem',
          fill: '$primary50',
          transition: '$default',
        },
      },
      spark: {
        svg: {
          position: 'absolute',
          top: -15,
          left: -20,
        },
      },
      underline: {
        svg: {
          position: 'absolute',
          bottom: -20,
          right: '-10%',
          '@sm': { right: '-10%' },
        },
      },
    },
  },
});

type TextDecorationProps = {
  variant: 'underline' | 'spark' | 'arrow';
  color?: string;
};

export const TextDecoration: React.FC<TextDecorationProps> = props => {
  const Svg = getSvgByVariant(props.variant);
  if (!Svg) return <></>;

  return (
    <StyledTextDecoration variant={props.variant} data-text-decoration>
      <Svg color={props.color} aria-hidden="true" />
      {props.children}
    </StyledTextDecoration>
  );
};

const getSvgByVariant = (variant: TextDecorationProps['variant']) => {
  switch (variant) {
    case 'spark':
      return SparkSvg;
    case 'underline':
      return UnderlineSvg;
    case 'arrow':
      return ArrowRightUpSvg;
  }
};
