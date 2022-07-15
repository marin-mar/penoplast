import React from 'react';

import IntroSection from '../IntroSection/IntroSection';
import CertificateSection from '../CertificateSection/CertificateSection';

import './ContentSection.scss';
import CatalogSection from '../CatalogSection/CatalogSection';

const ContentSection = () => {
  return (
    <main className="content">
      <IntroSection classes="content__intro-section" />
      <CertificateSection classes="content__certificate-section" />
      <CatalogSection classes="content__catalog-section" />
    </main>
  );
};

export default ContentSection;
