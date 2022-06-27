import type { CSSProperties } from 'react';

import { styled } from '@config/stitches.config';

import { ArrowRightUpSvg } from './ArrowRightUp';
import { ChevronLeftSvg } from './ChevronLeft';
import { ChevronRightSvg } from './ChevronRight';
import { CloseSvg } from './Close';
import { DarkModeSvg } from './DarkMode';
import { LightModeSvg } from './LightMode';
import { MediumSvg } from './Medium';
import { TwitterSvg } from './Twitter';
import { LinkedInSvg } from './LinkedIn';
import { GithubSvg } from './Github';
import { RssSvg } from './Rss';

const Icons: Record<string, React.FC<SvgProps>> = {
  ArrowRightUp: ArrowRightUpSvg,
  ChevronLeft: ChevronLeftSvg,
  ChevronRight: ChevronRightSvg,
  Close: CloseSvg,
  LightMode: LightModeSvg,
  DarkMode: DarkModeSvg,
  Medium: MediumSvg,
  Twitter: TwitterSvg,
  LinkedIn: LinkedInSvg,
  Github: GithubSvg,
  RSS: RssSvg,
};

export type SvgProps = {
  style?: CSSProperties;
  size?: number;
  title?: string;
  className?: string;
};

export type IconProps = {
  type: keyof typeof Icons;
} & SvgProps;

export const Icon: React.FC<IconProps> = ({ type, ...props }) => {
  const Svg = styled(Icons[type], {
    display: 'inline-block',
    verticalAlign: 'middle',
    overflow: 'hidden',
  });

  return <Svg {...props} />;
};
