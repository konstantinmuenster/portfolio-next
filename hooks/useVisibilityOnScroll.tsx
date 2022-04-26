import { useEffect, useState } from 'react';

export const useVisibilityOnScroll = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const isScrollDown = window.scrollY > lastScrollY;
      if (isScrollDown) setShow(false);
      else setShow(true);

      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return { show, lastScrollY };
};
