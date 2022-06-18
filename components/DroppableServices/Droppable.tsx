import { useDroppable } from '@dnd-kit/core';

import { styled } from '@config/stitches.config';

const StyledDroppable = styled('div', {
  transition: '$default',

  '&[data-drop-selected="true"]': {
    border: '2px solid $primary100 !important',
  },
  '&[data-drop-target="true"]': {
    border: '2px solid $pinky !important',
  },
});

type DroppableProps = {
  id: string;
  isSelected?: boolean;
  className?: string;
};

export const Droppable: React.FC<DroppableProps> = props => {
  const { setNodeRef, isOver } = useDroppable({
    id: props.id,
  });

  return (
    <StyledDroppable
      ref={setNodeRef}
      className={props.className}
      data-drop-selected={props.isSelected}
      data-drop-target={isOver}
    >
      {props.children}
    </StyledDroppable>
  );
};
