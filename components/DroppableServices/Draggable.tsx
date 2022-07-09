import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

import { styled } from '@config/stitches.config';

const StyledDraggable = styled('button', {
  position: 'relative',
  zIndex: 1,

  touchAction: 'none',

  '&:hover': { cursor: 'grab' },
  '&:active': { cursor: 'grabbing' },
});

type DraggableProps = {
  id: string;
  className?: string;
};

export const Draggable: React.FC<DraggableProps> = props => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });

  const style = transform
    ? {
        transform: CSS.Translate.toString(transform),
      }
    : undefined;

  return (
    <StyledDraggable
      className={props.className}
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      {props.children}
    </StyledDraggable>
  );
};
