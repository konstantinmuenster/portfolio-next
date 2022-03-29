import { useEffect, useState } from 'react';

const isSupported =
  typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined';

export const useMediaQuery = (mediaQuery: string) => {
  if (!isSupported) return false;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isMatching, setIsMatching] = useState(
    !!window.matchMedia(mediaQuery).matches
  );

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);
    const documentChangeHandler = () => setIsMatching(!!mediaQueryList.matches);

    try {
      mediaQueryList.addEventListener('change', documentChangeHandler);
    } catch (e) {
      // Safari isn't supporting mediaQueryList.addEventListener
      mediaQueryList.addListener(documentChangeHandler);
    }

    documentChangeHandler();
    return () => {
      try {
        mediaQueryList.removeEventListener('change', documentChangeHandler);
      } catch (e) {
        // Safari isn't supporting mediaQueryList.removeEventListener
        mediaQueryList.removeListener(documentChangeHandler);
      }
    };
  }, [mediaQuery]);

  return isMatching;
};
