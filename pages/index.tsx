import type { NextPage } from 'next';

import { HeroSection } from 'sections/Hero';
import { IntroductionSection } from 'sections/Introduction';

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <IntroductionSection />
      <p>hello</p>
    </>
  );
};

export default Home;
