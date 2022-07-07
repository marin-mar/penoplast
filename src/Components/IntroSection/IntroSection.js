import React from 'react';

import TextElement from '../TextElement/TextElement';
import AdvantageList from '../AdvantageList/AdvantageList';
import CallbackForm from '../CallbackForm/CallbackForm';

import './IntroSection.scss';

const IntroSection = ({ classes }) => {
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
      </div>
    </section>
  );
};

export default IntroSection;
