import type { NextPage } from 'next';
import { useState } from 'react';
import { NextSeo } from 'next-seo';

import { AboutSection } from '@sections/ServicesPage/About';
import { ContactSection } from '@sections/ServicesPage/Contact';
import { HeroSection } from '@sections/ServicesPage/Hero';
import { ServicesSection } from '@sections/ServicesPage/Services';
import { ContactModal } from '@components/Modal';
import { generateSeoProps, SiteUrl } from '@config/seo.config';

const seoProps = generateSeoProps({
  url: `${SiteUrl}/services`,
  title: 'Product & Web Development Services by Konstantin Münster',
  description:
    'I am a freelance web / product developer with over 5 years of experience and a background in product management.',
});

const ServicesPage: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <NextSeo {...seoProps} />
      <HeroSection openContactModal={() => setIsModalOpen(true)} />
      <AboutSection />
      <ServicesSection />
      <ContactSection openContactModal={() => setIsModalOpen(true)} />
      <ContactModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  );
};

export default ServicesPage;
