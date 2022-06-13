import { AboutSection } from '@sections/ServicesPage/About';
import { HeroSection } from '@sections/ServicesPage/Hero';

import type { NextPage } from 'next';

const ServicesPage: NextPage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
    </>
  );
};

export default ServicesPage;
