import { theme } from '@config/stitches.config';

import { TextDecorationSvgProps } from '.';

export const SparkSvg: React.FC<TextDecorationSvgProps> = props => (
  <svg
    width="35"
    height="36"
    viewBox="0 0 35 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M31.649 16.3152C32.0406 15.1898 32.4363 14.0759 32.7965 12.9385C33.1008 11.9751 32.5641 10.9458 31.6006 10.6414C30.6371 10.337 29.609 10.8725 29.3046 11.836C28.9552 12.9407 28.5701 14.0218 28.1906 15.1157C27.8588 16.071 28.3649 17.1141 29.3202 17.4459C30.2741 17.7765 31.3172 17.2704 31.649 16.3152Z"
      fill={props.color ?? theme.colors.subtext.value}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.0417 17.187C20.6467 13.7184 19.0778 10.3223 17.6099 6.88575C17.2134 5.95592 16.136 5.52416 15.2062 5.92073C14.2777 6.31856 13.8458 7.39325 14.2424 8.32308C15.6992 11.7367 17.2596 15.1071 18.6436 18.5526C19.0209 19.4895 20.0886 19.945 21.0254 19.5676C21.9636 19.1915 22.419 18.1238 22.0417 17.187Z"
      fill={props.color ?? theme.colors.subtext.value}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.6986 25.7201C9.09501 23.9527 6.43654 22.2544 3.85409 20.4566C3.02507 19.8815 1.88362 20.0861 1.30588 20.9152C0.729479 21.7456 0.934175 22.887 1.76327 23.4647C4.35882 25.2673 7.02661 26.9744 9.64209 28.7505C10.4786 29.3176 11.6171 29.1001 12.1842 28.2636C12.7527 27.4283 12.5351 26.2872 11.6986 25.7201Z"
      fill={props.color ?? theme.colors.subtext.value}
    />
  </svg>
);
