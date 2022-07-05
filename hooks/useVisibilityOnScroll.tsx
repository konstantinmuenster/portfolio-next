import { useEffect, useState } from 'react';

const SCROLL_GRANULARITY = 10;

export const useVisibilityOnScroll = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // Only react on every n pixel to reduce updates
    const isScrollAboveGranularity = (scrollY: number) =>
      scrollY > lastScrollY + SCROLL_GRANULARITY ||
      scrollY < lastScrollY - SCROLL_GRANULARITY;

    const handleScroll = () => {
      if (isScrollAboveGranularity(window.scrollY)) {
        const isScrollDown = 0 < window.scrollY && window.scrollY > lastScrollY;
        if (isScrollDown) setShow(false);
        else setShow(true);
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return { show, lastScrollY };
};
