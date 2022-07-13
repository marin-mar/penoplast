import React, { useState } from 'react';

import TextElement from '../TextElement/TextElement';
import InputElement from '../InputElement/InputElement';
import ButtonElement from '../ButtonElement/ButtonElement';

import './CallbackForm.scss';

const CallbackForm = ({ classes }) => {
  const [formData, setFormData] = useState({ 'accept-conditions': false, 'client-name': '', 'client-phone': '' });

  const onInputChange = (target) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const onClickHandler = (evt) => {
    const activeBtnClass = 'callback-form__check-button_active';
    const target = evt.target;

    evt.preventDefault();

    target.type === 'button'
      ? target.classList.toggle(activeBtnClass)
      : target.parentNode.classList.toggle(activeBtnClass);

    setFormData({ ...formData, 'accept-conditions': !formData['accept-conditions'] });
  };

  const onSubmitForm = (evt) => {
    evt.preventDefault();
    const form = evt.target.parentNode;

    console.log(formData);
    form.reset();
  };

  return (
    <div className={`${classes} callback-form`}>
      <TextElement
        classes="callback-form__title"
        textElement="section-subtitle"
        text="Получите расчет стоимости пенопласта для вас в&nbsp;течении 20&nbsp;минут"
      />
      <TextElement
        classes="callback-form__text"
        textElement="section-text"
        text="Просто заполните форму и&nbsp;мы&nbsp;перезвоним"
      />

      <form className="callback-form__form" name="callback-form" onSubmit={onSubmitForm}>
        <InputElement
          classes="callback-form__input"
          inputType="name"
          name="client-name"
          placeholder="Введит Ваше имя"
          onInputChange={onInputChange}
        />
        <InputElement
          classes="callback-form__input"
          inputType="tel"
          name="client-phone"
          placeholder="Введите мобильный телефон"
          onInputChange={onInputChange}
        />
        <ButtonElement
          classes="callback-form__check-button"
          text=""
          type="button"
          onClickHandler={(evt) => onClickHandler(evt)}>
          <TextElement
            classes="callback-form__text"
            textElement="accept-text"
            text="Я принимаю условия передачи информации"
          />
        </ButtonElement>
        <ButtonElement
          classes="callback-form__submit-button"
          text="Заказать прайс на товар"
          type="submit"
          onClickHandler={(evt) => onSubmitForm(evt)}
        />
      </form>
    </div>
  );
};

export default CallbackForm;
