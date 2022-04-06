import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { LightMode, DarkMode } from '@styled-icons/material-outlined';

import { styled } from '@config/stitches.config';

const StyledThemeButton = styled('button', {
  transition: 'all .3s ease-out',
  borderRadius: '$less',
  padding: '0.75rem',

  '&:hover, &:focus-visible': {
    backgroundColor: '$background',
    svg: { fill: '$text' },
  },

  svg: { size: '24px', fill: '$subtext' },
});

export const ThemeToggle: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <></>;

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <StyledThemeButton id="theme-toggle" onClick={toggleTheme}>
      {resolvedTheme === 'light' ? (
        <DarkMode title="Switch to dark color scheme" />
      ) : (
        <LightMode title="Switch to light color scheme" />
      )}
    </StyledThemeButton>
  );
};
