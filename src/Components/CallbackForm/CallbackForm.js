import React from 'react';

import TextElement from '../TextElement/TextElement';
import InputElement from '../InputElement/InputElement';
import ButtonElement from '../ButtonElement/ButtonElement';

import './CallbackForm.scss';

const CallbackForm = ({ classes }) => {
  const formData = {};

  const onClickHandler = (evt) => {
    evt.preventDefault();
    formData['accept-conditions'] = !formData['accept-conditions'];
    evt.target.parentNode.classList.toggle('callback-form__check-button_active');
  };

  const onSubmitForm = (evt) => {
    evt.preventDefault();
    const form = evt.target.parentNode;
    const formInputs = Array.from(form.elements);

    formInputs.forEach((formInput) => {
      if (formInput.classList.contains('callback-form__input')) {
        if (formInput.value) {
          formData[formInput.name] = formInput.value;
          formInput.classList.remove('input-element_invalid');
          formInput.classList.add('input-element_valid');
        } else {
          formInput.classList.remove('input-element_valid');
          formInput.classList.add('input-element_invalid');
        }
      }
    });
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

      <form className="callback-form__form" name="callback-form">
        <InputElement
          classes="callback-form__input"
          inputType="name"
          name="client-name"
          placeholder="Введит Ваше имя"
        />
        <InputElement
          classes="callback-form__input"
          inputType="tel"
          name="client-phone"
          placeholder="Введите мобильный телефон"
        />
        <ButtonElement
          classes="callback-form__submit-button"
          text="Заказать прайс на&nbsp;товар"
          type="submit"
          onClickHandler={(evt) => onSubmitForm(evt)}
        />
        <ButtonElement
          classes="callback-form__check-button"
          text=""
          type="button"
          onClickHandler={(evt) => onClickHandler(evt)}>
          <TextElement
            classes="callback-form__text"
            textElement="accept-text"
            text="Я&nbsp;принимаю условия передачи информации"
          />
        </ButtonElement>
      </form>
    </div>
  );
};

export default CallbackForm;
