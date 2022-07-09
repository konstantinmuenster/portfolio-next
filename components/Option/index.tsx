import { darkTheme, styled } from '@config/stitches.config';
import { ComponentPropsWithoutRef } from 'react';

const StyledOption = styled('button', {
  py: '0.25rem',
  px: '0.375rem',
  fontSize: '$mini',
  borderRadius: '$less',

  color: '$subtext',
  background: '$surface50',
  transition: '$default',

  [`.${darkTheme} &`]: { backgroundColor: '$secondary100' },

  '&:hover, &[data-selected="true"]': {
    color: '$primary900',
    background: '$primary50',
  },
});

type OptionProps = {
  onAdd: (label: string) => void;
  onRemove: (label: string) => void;
  isSelected: boolean;
  label: string;
} & ComponentPropsWithoutRef<'button'>;

export const Option: React.FC<OptionProps> = props => {
  return (
    <StyledOption
      onClick={() =>
        props.isSelected
          ? props.onRemove(props.label)
          : props.onAdd(props.label)
      }
      data-selected={props.isSelected}
      aria-label={props['aria-label']}
    >
      {props.label}
    </StyledOption>
  );
};
