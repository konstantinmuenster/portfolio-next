import { styled } from '@config/stitches.config';
import { SparkSvg } from './SparkSvg';
import { UnderlineSvg } from './UnderlineSvg';

export type SvgProps = { color?: string };

const StyledTextDecoration = styled('span', {
  position: 'relative',

  variants: {
    variant: {
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
          right: 60,
          '@sm': { right: '-50%' },
        },
      },
    },
  },
});

type TextDecorationProps = {
  variant: 'underline' | 'spark';
  color?: string;
};

export const TextDecoration: React.FC<TextDecorationProps> = props => {
  const Svg = getSvgByVariant(props.variant);
  if (!Svg) return <></>;

  return (
    <StyledTextDecoration variant={props.variant}>
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
  }
};
