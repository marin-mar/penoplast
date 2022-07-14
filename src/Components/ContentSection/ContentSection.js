import React from 'react';

import IntroSection from '../IntroSection/IntroSection';
import CertificateSection from '../CertificateSection/CertificateSection';

import './ContentSection.scss';

const ContentSection = () => {
	return (
    <main className="content">
      <IntroSection classes="content__intro-section" />
      <CertificateSection classes="content__certificate-section" />
      
      {/* <TextElement
        classes="content__title"
        textElement="catalog-title"
        text="Каталог товаров"
        style={{ backgroundColor: 'black' }}
      /> */}
    </main>
  );
};

export default ContentSection;