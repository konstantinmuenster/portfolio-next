import { ReactElement, ReactNode } from 'react';

import { Overhead } from '@components/Overhead';

import { BaseCard } from './Base';

export const LearningPathCard = (props: {
  children?: ReactNode;
}): ReactElement => {
  return (
    <BaseCard background={'surface50'} emoji="🎓">
      <Overhead>What We Cover</Overhead>
      <div className="learning-path">{props.children}</div>
    </BaseCard>
  );
};
