import React from 'react';
import ButtonElement from '../ButtonElement/ButtonElement';

import './CardElement.scss';

const CardElement = ({ classes, card, cardType = 'card', onClickHandler }) => {
  switch (cardType) {
    case 'catalog':
      return (
        <div
          className={`${classes} card card_type_catalog`}
          id={card.id}
          style={{ backgroundImage: `url(${card.icon})` }}>
          <h4 className="card__title">{card.title}</h4>
          <ButtonElement
            classes="card__button button-element_type_small"
            type="button"
            text={card.text}
            onClickHandler={onClickHandler}
          />
        </div>
      );
    case 'card':
    default:
      return (
        <div className={`${classes} card`} id={card.id}>
          <img className="card__icon" src={card.icon} alt={card.title} />
          <h4 className="card__title">{card.title}</h4>
          <p className="card__text">{card.text}</p>
        </div>
      );
  }
};

export default CardElement;
