import React from 'react';

import telegramIcon from './telegram.svg';
import whatsappIcon from './whatsapp.svg';

import './BusinessInfo.scss';

const BusinessInfo = ({ classes }) => {
  return (
    <div className={`${classes} business-info`}>
      <div className="business-info__info">
        <a className="business-info__phone" href="tel:+8 800 966 222">
          8 800 966 222
        </a>
        <p className="business-info__hours">пн-вс 9:00 - 18:00</p>
      </div>

      <div className="business-info__social">
        <a className='business-info__link' href="https://telegram.org/" target="_blank" rel="noopener noreferrer">
          <img className='business-info__icon' src={telegramIcon} alt="иконка для перехода в telegram" />
        </a>
        <a className='business-info__link' href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
          <img className='business-info__icon' src={whatsappIcon} alt="иконка для перехода в whatsapp" />
        </a>
      </div>
    </div>
  );
};

export default BusinessInfo;
