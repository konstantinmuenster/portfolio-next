import { useRef, useEffect } from 'react';

type onWheelHandler = (e: WheelEvent) => void;

export const useHorizontalScroll = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (element) {
      const onWheel = (e: WheelEvent & { wheelDeltaY: number }) => {
        // If the user didn't scroll some pixels, do nothing
        if (e.deltaY === 0) return;

        // If the user uses a trackpad instead an actual mouse, do nothing
        const isTrackpad = e.wheelDeltaY
          ? e.wheelDeltaY === e.deltaY * -3
          : e.deltaMode === 0;
        if (isTrackpad) return;

        // If the user reached the start or end of the container, do nothing
        const isAtStartAndUpwards = element.scrollLeft === 0 && e.deltaY <= 0;
        const isAtEndAndDownwards =
          element.offsetWidth + element.scrollLeft >= element.scrollWidth &&
          e.deltaY >= 0;
        if (isAtStartAndUpwards || isAtEndAndDownwards) return;

        e.preventDefault();
        element.scrollTo({ left: element.scrollLeft + e.deltaY });
      };

      element.addEventListener('wheel', onWheel as onWheelHandler);

      return () =>
        element.removeEventListener('wheel', onWheel as onWheelHandler);
    }
  }, []);

  return ref;
};
