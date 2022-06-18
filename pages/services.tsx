import { AboutSection } from '@sections/ServicesPage/About';
import { ContactSection } from '@sections/ServicesPage/Contact';
import { HeroSection } from '@sections/ServicesPage/Hero';
import { ServicesSection } from '@sections/ServicesPage/Services';

import type { NextPage } from 'next';

const ServicesPage: NextPage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
};

export default ServicesPage;
