import React from 'react';

import './TextElement.scss';

const TextElement = ({ classes, textElement, text }) => {
  switch (textElement) {
    case 'main-title':
      return <h1 className={`${classes} text-element text-element_type_main-title`}>{text}</h1>;
    case 'main-subtitle':
      return <p className={`${classes} text-element text-element_type_main-subtitle`}>{text}</p>;
    case 'section-title':
      return <h2 className={`${classes} text-element text-element_type_section-title`}>{text}</h2>;
    case 'catalog-title':
      return <h2 className={`${classes} text-element text-element_type_catalog-title`}>{text}</h2>;
    case 'section-subtitle':
      return <h3 className={`${classes} text-element text-element_type_section-subtitle`}>{text}</h3>;
    case 'section-text':
      return <p className={`${classes} text-element text-element_type_section-text`}>{text}</p>;
    case 'accept-text':
      return <p className={`${classes} text-element text-element_type_accept-text`}>{text}</p>;
    default:
      break;
  }
};

export default TextElement;
