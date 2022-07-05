import React from 'react';

import './TitleElement.scss';

const TitleElement = ({ titleElement, text }) => {
  switch (titleElement) {
    case 'main-title':
      return <h1 className="title title_type_main-title">{text}</h1>;
    case 'main-subtitle':
      return <p className="title title_type_main-subtitle">{text}</p>;
    case 'section-title':
      return <h2 className="title title_type_section-title">{text}</h2>;
    case 'catalog-title':
      return <h2 className="title title_type_catalog-title">{text}</h2>;
    case 'section-subtitle':
      return <h3 className="title title_type_section-subtitle">{text}</h3>;
    default:
      break;
  }

  return <div></div>;
};

export default TitleElement;