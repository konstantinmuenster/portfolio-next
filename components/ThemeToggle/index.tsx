import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { styled } from '@config/stitches.config';
import { Icon } from '@components/Icon';

const StyledThemeButton = styled('button', {
  transition: 'all .3s ease-out',
  hoverBg: '$colors$surface50',
  padding: '0.8rem',
  '@md': { padding: '0.4rem' },

  '&:hover': {
    svg: { fill: '$primary900' },
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
        <Icon type="DarkMode" title="Switch to dark color scheme" />
      ) : (
        <Icon type="LightMode" title="Switch to light color scheme" />
      )}
    </StyledThemeButton>
  );
};
