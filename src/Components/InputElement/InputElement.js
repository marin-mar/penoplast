import React from 'react';

import './InputElement.scss';

const InputElement = ({ classes, inputType, name, placeholder, onInputChange }) => {
  const handleChange = (evt) => {
    const target = evt.target;
    if (target.value) {
      target.classList.remove('input-element_invalid');
      target.classList.add('input-element_valid');
      onInputChange(target);
    } else {
      target.classList.remove('input-element_valid');
      target.classList.add('input-element_invalid');
    }
  };

  return (
    <input
      className={`${classes} input-element`}
      type={inputType === 'tel' ? 'tel' : 'text'}
      name={name}
      placeholder={placeholder}
      required
      onBlur={handleChange}
    />
  );
};

export default InputElement;
