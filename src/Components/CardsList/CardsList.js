import React from 'react';
import CardElement from '../CardElement/CardElement';

import './CardsList.scss';

const CardsList = ({ cardsList, classes }) => {
  return (
    <ul className={`${classes} cards-list`}>
      {cardsList.map((card) => (
        <li className="cards-list__item" key={card.id}>
          <CardElement classes="cards-list__card" card={card} />
        </li>
      ))}
    </ul>
  );
};

export default CardsList;
