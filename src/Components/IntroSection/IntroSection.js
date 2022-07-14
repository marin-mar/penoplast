import React from 'react';

import TextElement from '../TextElement/TextElement';
import AdvantageList from '../AdvantageList/AdvantageList';
import CallbackForm from '../CallbackForm/CallbackForm';
import CardsList from '../CardsList/CardsList';

import approachCardIcon from './approachCardIcon.svg';
import qualityCardIcon from './qualityCardIcon.svg';

import './IntroSection.scss';

const IntroSection = ({ classes }) => {
  const cardsList = [
    {
      id: 'introSectionApproachCard',
      title: 'Важен подход',
      text: 'Мы можем менять форму, размеры и физико-технические свойства пенопласта под любые технические задания',
      icon: approachCardIcon,
    },
    {
      id: 'introSectionQualityCard',
      title: 'Выбирай качество',
      text: 'Остерегайтесь некачественного пенопласта. Очень часто производители удешевляют производство, жертвуя качеством, чтобы предложить цены ниже возможных.',
      icon: qualityCardIcon,
    },
  ];

  return (
    <section className={`${classes} intro-section`}>
      <div className="intro-section__container">
        <TextElement classes="intro-section__title" textElement="main-title" text="Пенопласт от&nbsp;производителя" />
        <TextElement
          classes="intro-section__subtitle"
          textElement="main-subtitle"
          text="и&nbsp;изделия из&nbsp;пенопласта"
        />
        <AdvantageList classes="intro-section__advantage-list" />
        <CallbackForm classes="intro-section__callback-form" />
        <CardsList classes="intro-section__cards-list cards-list_type_straight" cardsList={cardsList} />
      </div>
    </section>
  );
};

export default IntroSection;
