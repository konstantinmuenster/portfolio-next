import type { NextPage } from 'next';
import { useState } from 'react';

import { AboutSection } from '@sections/ServicesPage/About';
import { ContactSection } from '@sections/ServicesPage/Contact';
import { HeroSection } from '@sections/ServicesPage/Hero';
import { ServicesSection } from '@sections/ServicesPage/Services';
import { ContactModal } from '@components/Modal';

const ServicesPage: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection openContactModal={() => setIsModalOpen(true)} />
      <ContactModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  );
};

export default ServicesPage;
