import { Children, MouseEvent, useCallback, useRef } from 'react';

import { styled } from '@config/stitches.config';

const StyledCarousel = styled('div', {
  position: 'relative',
  overflowX: 'auto',
  overflowY: 'hidden',
  whiteSpace: 'nowrap',
  width: '100%',
  px: 'calc(50% - 400px)',
  marginBottom: '1rem',

  '.carousel-item': {
    position: 'relative',
    display: 'inline-block',
    my: '1rem',
    marginRight: '1rem',
    transition: '$default',

    '&:hover': { transform: 'scale(1.015)' },

    '&:first-of-type': { marginLeft: '1rem', '@md': { marginLeft: 0 } },

    '.carousel-item-content .image-wrapper': {
      width: '18rem',
      height: '10.5rem',

      '@sm': { width: '35rem', height: '20rem' },
      '@md': { width: '52rem', height: '30rem' },
    },
  },

  '.carousel-item-left-panel': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '50%',
    height: '100%',

    '&:hover': { cursor: 'w-resize' },
  },

  '.carousel-item-right-panel': {
    position: 'absolute',
    top: 0,
    left: '50%',
    width: '50%',
    height: '100%',

    '&:hover': { cursor: 'e-resize' },
  },
});

export const Carousel: React.FC = props => {
  const ref = useRef<HTMLDivElement>(null);

  const scrollToItem = useCallback((e: MouseEvent, dir: 'prev' | 'next') => {
    if (!ref.current || !(e.target instanceof HTMLElement)) return;

    const panelRect = (e.target as HTMLElement).getBoundingClientRect();
    const scrollWidth = panelRect.width * 2;
    const scrollOffset = dir === 'prev' ? -scrollWidth : scrollWidth;

    ref.current.scrollTo({
      behavior: 'smooth',
      left: ref.current.scrollLeft + scrollOffset,
    });
  }, []);

  return (
    <StyledCarousel ref={ref}>
      {Children.map(props.children, child => {
        return (
          <div className="carousel-item">
            <div className="carousel-item-content">{child}</div>
            <div
              className="carousel-item-left-panel"
              onClick={e => scrollToItem(e, 'prev')}
            />
            <div
              className="carousel-item-right-panel"
              onClick={e => scrollToItem(e, 'next')}
            />
          </div>
        );
      })}
    </StyledCarousel>
  );
};
