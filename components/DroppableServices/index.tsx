import { useMemo, useRef, useState } from 'react';
import { DndContext, DragEndEvent, UniqueIdentifier } from '@dnd-kit/core';

import { serviceDefinitions } from '@config/services.config';
import { styled } from '@config/stitches.config';
import { Avatar } from '@components/Avatar';
import { Emoji } from '@components/Emoji';
import { Overhead } from '@components/Overhead';
import { Tooltip, TooltipRef } from '@components/Tooltip';

import { Draggable } from './Draggable';
import { Droppable } from './Droppable';

const StyledDroppableServices = styled('div', {
  '.services-list': {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    columnGap: '1rem',

    '.service-item': {
      position: 'relative',
      width: '300px',
      background: '$secondary100',
      border: '2px solid $secondary100',
      borderRadius: '$default',
      px: '0.5rem',
      py: '0.75rem',
      marginTop: '1rem',

      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      columnGap: '0.5rem',

      '.service-item-content': {
        '.service-item-title': {
          display: 'block',
          fontWeight: 500,
          color: '$primary900',
          marginBottom: '0.25rem',
        },

        p: { fontSize: '$small', lineHeight: '$small', color: '$subtext' },
      },

      '&:not(.service-avatar) div[data-draggable]': {
        position: 'absolute',
        top: -16,
        right: 8,
      },
    },

    '.service-avatar': {
      width: '4.5rem',
      minHeight: '4.5rem',
      px: '0.75rem',
      background: 'transparent',
      borderStyle: 'dashed',
      minWidth: 'unset',
      alignSelf: 'stretch',
    },
  },
});

type DroppableServicesProps = {
  openContactModal: () => void;
};

export const DroppableServices: React.FC<DroppableServicesProps> = props => {
  const [parent, setParent] = useState<UniqueIdentifier | null>(null);

  const tooltipRef = useRef<TooltipRef>(null);

  const dragStartHandler = () => {
    tooltipRef?.current?.hideTooltip();
  };

  const dragEndHandler = ({ over }: DragEndEvent) => {
    if (over && over.id !== parent) props.openContactModal();
    setParent(over ? over.id : null);
  };

  const DraggableAvatar = useMemo(() => {
    return (
      <div data-draggable>
        <Tooltip ref={tooltipRef} content="Drag me on a service">
          <Draggable id="draggable">
            <Avatar />
          </Draggable>
        </Tooltip>
      </div>
    );
  }, [tooltipRef]);

  return (
    <DndContext
      id="droppableServices"
      onDragStart={dragStartHandler}
      onDragEnd={dragEndHandler}
    >
      <StyledDroppableServices>
        <Overhead>How I Can Help You</Overhead>
        <div className="services-list">
          {serviceDefinitions.map((service, key) => {
            const id = `service${key}`;
            const isSelected = parent === id;
            return (
              <Droppable
                className="service-item"
                id={id}
                key={key}
                isSelected={isSelected}
              >
                <Emoji
                  type={service.emoji}
                  background="surface50"
                  size="small"
                />
                <div className="service-item-content">
                  <span className="service-item-title">{service.name}</span>
                  <p>{service.summary}</p>
                </div>
                {isSelected ? DraggableAvatar : null}
              </Droppable>
            );
          })}
          <div className="service-item service-avatar">
            {parent === null ? DraggableAvatar : undefined}
          </div>
        </div>
      </StyledDroppableServices>
    </DndContext>
  );
};
