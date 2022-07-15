import React from 'react';
import TextElement from '../TextElement/TextElement';
import CallbackForm from '../CallbackForm/CallbackForm';
import CardsList from '../CardsList/CardsList';
import platesCatalogCardItem from './platesCatalogCardItem.jpg';
import shellCatalogCardItem from './shellCatalogCardItem.jpg';
import ballsCatalogCardItem from './ballsCatalogCardItem.jpg';

import './CatalogSection.scss';

const CatalogSection = ({ classes }) => {
  const cardsList = [
    {
      id: 'platesCatalogCardItem',
      title: 'Плиты теплоизоляционные',
      text: 'Заказать прайс на товар',
      icon: platesCatalogCardItem,
    },
    {
      id: 'shellCatalogCardItem',
      title: 'Скорлупа из пенопласта',
      text: 'Заказать прайс на товар',
      icon: shellCatalogCardItem,
    },
    {
      id: 'ballsCatalogCardItem',
      title: 'Шарики и дробленка',
      text: 'Заказать прайс на товар',
      icon: ballsCatalogCardItem,
    },
  ];

  const onClickHandler = (evt) => {
    evt.preventDefault();
    console.log(`Выбран: id_${evt.target.parentNode.id} ${evt.target.previousSibling.textContent}`);
  };

  return (
    <section className={`${classes} catalog-section`}>
      <TextElement classes="catalog-section__title" textElement="catalog-title" text="Каталог товаров" />
      <CardsList
        classes="catalog-section__cards-list"
        cardsList={cardsList}
        cardType="catalog"
        onClickHandler={onClickHandler}
      />
      <CallbackForm classes="catalog-section__callback-form" />
    </section>
  );
};

export default CatalogSection;
