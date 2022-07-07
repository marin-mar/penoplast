import React from 'react';

import './InputElement.scss';

const InputElement = ({ classes, inputType, name, placeholder }) => {
  return (
    <input
      className={`${classes} input-element`}
      type={inputType === 'tel' ? 'tel' : 'text'}
      name={name}
      placeholder={placeholder}
      required
    />
  );
};

export default InputElement;
