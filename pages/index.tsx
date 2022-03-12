import type { NextPage } from 'next';

import { Box } from '@components/Box';
import { ThemeToggle } from '@components/ThemeToggle';

const Home: NextPage = () => {
  return (
    <Box css={{ fontFamily: '$serif', background: '$gradient' }}>
      <Box as={'h1'}>Hello</Box>
      <ThemeToggle />
    </Box>
  );
};

export default Home;
