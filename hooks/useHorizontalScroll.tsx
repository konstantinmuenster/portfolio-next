import { useRef, useEffect } from 'react';

export const useHorizontalScroll = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (element) {
      const onWheel = (e: WheelEvent) => {
        const isAtStartAndUpwards = element.scrollLeft === 0 && e.deltaY <= 0;
        const isAtEndAndDownwards =
          element.offsetWidth + element.scrollLeft >= element.scrollWidth &&
          e.deltaY >= 0;

        if (e.deltaY === 0 || isAtStartAndUpwards || isAtEndAndDownwards)
          return;

        e.preventDefault();
        element.scrollTo({ left: element.scrollLeft + e.deltaY });
      };
      element.addEventListener('wheel', onWheel);
      return () => element.removeEventListener('wheel', onWheel);
    }
  }, []);

  return ref;
};
