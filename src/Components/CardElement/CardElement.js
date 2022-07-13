import React from 'react';

import './CardElement.scss';

const CardElement = ({ classes, card }) => {
  return (
    <div className={`${classes} card`}>
      <img className="card__icon" src={card.icon} alt={card.title} />
      <h4 className="card__title">{card.title}</h4>
      <p className="card__text">{card.text}</p>
    </div>
  );
};

export default CardElement;
