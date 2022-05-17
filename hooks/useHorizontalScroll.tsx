import { useRef, useEffect } from 'react';

export const useHorizontalScroll = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (element) {
      const onWheel = (e: WheelEvent) => {
        // If the user didn't scroll some pixels, do nothing
        if (e.deltaY === 0) return;

        // Only start scrolling horizontally, if we are within the center area of the image
        const imageStart = element.offsetTop;
        const imageEnd = imageStart + element.offsetHeight;
        const distanceBeforeScroll = element.offsetHeight * 0.4;
        const centerRangeStart = imageStart + distanceBeforeScroll;
        const centerRangeEnd = imageEnd - distanceBeforeScroll;

        if (e.pageY < centerRangeStart || e.pageY > centerRangeEnd) return;

        // If the user reached the start or end of the container, do nothing
        const isAtStartAndUpwards = element.scrollLeft === 0 && e.deltaY <= 0;
        const isAtEndAndDownwards =
          element.offsetWidth + element.scrollLeft >= element.scrollWidth &&
          e.deltaY >= 0;

        if (isAtStartAndUpwards || isAtEndAndDownwards) {
          document.body.style['overflowY'] = 'visible';
          return;
        }

        e.preventDefault();
        document.body.style['overflowY'] = 'hidden';
        element.scrollTo({ left: element.scrollLeft + e.deltaY });
      };

      element.addEventListener('wheel', onWheel);

      return () => element.removeEventListener('wheel', onWheel);
    }
  }, []);

  return ref;
};
