import React from 'react';
import TextElement from '../TextElement/TextElement';
import CardsList from '../CardsList/CardsList';
import CallbackForm from '../CallbackForm/CallbackForm';

import clientIconAdmiral from './clientIcon_admiral.svg';
import clientIconDavis from './clientIcon_davis.svg';
import clientIconMial from './clientIcon_mial.svg';
import clientIconPromalp from './clientIcon_promalp.svg';
import clientIconSaturn from './clientIcon_saturn.svg';
import clientIconSega from './clientIcon_sega.svg';
import clientSectionMobile from './clientSection_mobile.png';

import './ClientSection.scss';

const ClientSection = ({ classes }) => {
  const clientList = [
    { id: 'clientIconAdmiral', icon: clientIconAdmiral, title: 'Логотип компании-клиента Адмирал' },
    { id: 'clientIconDavis', icon: clientIconDavis, title: 'Логотип компании-клиента Dais' },
    { id: 'clientIconMial', icon: clientIconMial, title: 'Логотип компании-клиента МиАл' },
    { id: 'clientIconPromalp', icon: clientIconPromalp, title: 'Логотип компании-клиента ПромАльп' },
    { id: 'clientIconSaturn', icon: clientIconSaturn, title: 'Логотип компании-клиента Сатурн' },
    { id: 'clientIconSega', icon: clientIconSega, title: 'Логотип компании-клиента СегаСтрой' },
  ];

  const onClickHandler = (evt) => {
		evt.preventDefault();
		
    console.log(`clicked on ${evt.target.parentNode.id}`);
  };

  return (
    <section className={`${classes} client-section`}>
      <TextElement classes="client-section__title" textElement="section-title" text="среди наших клиентов" />
      <CardsList
        classes="client-section__list"
        cardType="clients"
        cardsList={clientList}
        onClickHandler={onClickHandler}
      />
      <div className="client-section__form-wrapper">
        <img src={clientSectionMobile} alt="изображение мобильного телефона" className="client-section__img" />
        <CallbackForm classes="client-section__callback-form" />
      </div>
    </section>
  );
};

export default ClientSection;
