import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, currentTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <></>;

  const toggleTheme = () => {
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  return <button onClick={toggleTheme}>Switch theme</button>;
};
