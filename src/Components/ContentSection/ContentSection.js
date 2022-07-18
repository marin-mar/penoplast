import React from 'react';

import IntroSection from '../IntroSection/IntroSection';
import CertificateSection from '../CertificateSection/CertificateSection';
import CatalogSection from '../CatalogSection/CatalogSection';
import ClientSection from '../ClientSection/ClientSection';

import './ContentSection.scss';

const ContentSection = () => {
  return (
    <main className="content">
      <IntroSection classes="content__intro-section" />
      <CertificateSection classes="content__certificate-section" />
      <CatalogSection classes="content__catalog-section" />
      <ClientSection classes="content__client-section" />
    </main>
  );
};

export default ContentSection;
