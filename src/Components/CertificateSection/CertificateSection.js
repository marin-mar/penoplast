import React from 'react';

import TextElement from '../TextElement/TextElement';
import ButtonElement from '../ButtonElement/ButtonElement';
import CardsList from '../CardsList/CardsList';
import qualityCardIcon from './qualityCardIcon.svg';
import pricesCardIcon from './pricesCardIcon.svg';
import deadlinesCardIcon from './deadlinesCardIcon.svg';
import certificateImg from './certificateImg.png';
import equipmentImg from './equipmentImg.png';

import './CertificateSection.scss';

const CertificateSection = ({ classes }) => {
  const cardsList = [
    {
      id: 'certificateSectionQualityCard',
      title: 'Высокое качество',
      text: 'Низкая плотность и небольшой вес, отличные теплотехнические характеристики и неплохая звукоизоляция',
      icon: qualityCardIcon,
    },
    {
      id: 'certificateSectionPricesCard',
      title: 'Приятные цены',
      text: 'Привлекательные акции для новых клиентов и накопительные бонусы постоянным покупателям',
      icon: pricesCardIcon,
    },
    {
      id: 'certificateSectionDeadlinesCar',
      title: 'Сжатые сроки изготовления',
      text: 'Над выполнением заказа работают профессионалы своего дела 24/7 круглый год',
      icon: deadlinesCardIcon,
    },
  ];

  const onClickHandler = (evt) => {
    evt.preventDefault();

    const certificate = document.querySelector('.certificate-section__certificate');
    const certificateBtn = document.querySelector('.certificate-section__btn');

    certificate.classList.toggle('certificate-section__certificate_opened');

    if (certificate.classList.contains('certificate-section__certificate_opened')) {
      certificateBtn.textContent = 'Закрыть окно просмотра';
      document.body.style.overflow = 'hidden';
    } else {
      certificateBtn.textContent = 'Сертификат соответсвия';
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <section className={`${classes} certificate-section`}>
      <TextElement
        classes="certificate-section__title"
        textElement="section-title"
        text="Работаем официально. Имеем&nbsp;допуск."
      />
      <div className="certificate-section__certificate">
        <ButtonElement
          classes="certificate-section__btn button-element_type_light"
          type="button"
          text="Сертификат соответсвия"
          onClickHandler={onClickHandler}
        />
        <img
          className="certificate-section__img certificate-section__img_type_certificate"
          src={certificateImg}
          alt="Сертификат соответсвия"
        />
      </div>
      <div className="certificate-section__equipment">
        <div className="certificate-section__equipment-wrapper">
          <h3 className="certificate-section__subtitle">Лучшее оборудование</h3>
          <p className="certificate-section__text">
            Работаем на самом высокотехнологичном оборудовании для изготовления пенопласта
          </p>
        </div>
        <img
          className="certificate-section__img certificate-section__img_type_equipment"
          src={equipmentImg}
          alt="Станок по производству пенопласта"
        />
      </div>
      <CardsList classes="certificate-section__cards-list cards-list_type_various" cardsList={cardsList} />
    </section>
  );
};

export default CertificateSection;
