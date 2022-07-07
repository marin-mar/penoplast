import React from 'react';

import profitIcon from './profit.svg';
import deliveryIcon from './delivery.svg';
import qualityIcon from './quality.svg';
import regionIcon from './region.svg';

import './AdvantageList.scss';

const AdvantageList = ({ classes }) => {
  const advantageList = [
    { text: 'С&nbsp;нами выгодно сотрудничать', img: profitIcon },
    { text: 'Доставка транспортной компанией в&nbsp;любую точку мира', img: deliveryIcon },
    { text: 'Высокое качество продукции', img: qualityIcon },
    { text: 'Работа по&nbsp;всей России', img: regionIcon },
  ];

  return (
    <ul className={`${classes} advantage-list`}>
      {advantageList.map((item) => (
        <li className="advantage-list__item" key={item.text}>
          <img className="advantage-list__img" src={item.img} alt={item.text} />
          <p className="advantage-list__text">{item.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default AdvantageList;
