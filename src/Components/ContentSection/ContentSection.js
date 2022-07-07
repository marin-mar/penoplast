import React from 'react';

// import TextElement from '../TextElement/TextElement';
import IntroSection from '../IntroSection/IntroSection';

import './ContentSection.scss';

const ContentSection = () => {
	return (
    <main className="content">
      <IntroSection classes="content__intro-section" />
      {/* <TextElement classes="content__title" TextElement="section-title" text="Работаем официально. Имеем допуск." /> */}
      {/* <TextElement
        classes="content__title"
        TextElement="catalog-title"
        text="Каталог товаров"
        style={{ backgroundColor: 'black' }}
      /> */}
      
    </main>
  );
};

export default ContentSection;