import { useMemo } from 'react';
import Fuse from 'fuse.js';

export const useSearchIndex = <T,>(
  data: T[],
  keys: Fuse.FuseOptionKey<T>[]
) => {
  return useMemo(() => {
    return new Fuse(data, {
      minMatchCharLength: 2,
      ignoreLocation: true,
      threshold: 0.1,
      keys: keys,
    });
  }, [data, keys]);
};
