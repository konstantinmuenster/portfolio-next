import { useTheme } from 'next-themes';

import { darkTheme, theme } from '@config/stitches.config';

export const useThemeValue = () => {
  return useTheme().resolvedTheme === 'light' ? theme : darkTheme;
};
