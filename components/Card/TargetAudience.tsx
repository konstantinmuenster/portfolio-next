import { ReactElement, ReactNode } from 'react';

import { Overhead } from '@components/Overhead';

import { BaseCard } from './Base';

export const TargetAudienceCard = (props: {
  children?: ReactNode;
}): ReactElement => {
  return (
    <BaseCard background={'surface50'} emoji="📣">
      <Overhead>Target Audience</Overhead>
      <div className="target-audience">{props.children}</div>
    </BaseCard>
  );
};
