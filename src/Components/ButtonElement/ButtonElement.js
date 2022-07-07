import React from 'react';

import './ButtonElement.scss';

const ButtonElement = ({ classes, type, text, onClickHandler, children }) => {
  return (
    <button className={`${classes} button-element`} type={type || 'button'} onClick={onClickHandler}>
      {text || children}
    </button>
  );
};

export default ButtonElement;
