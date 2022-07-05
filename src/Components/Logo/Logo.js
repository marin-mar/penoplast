import React from 'react';
import logo from './logo.svg';
import './Logo.scss';

const Logo = ({ classes }) => {
  return (
    <div className={`${classes} logo`}>
      <div className="logo__text">
        <p className="logo__name">Пенопласт Лидер</p>
        <p className="logo__slogan">№1 В России</p>
      </div>
      <div className="logo__wrapper">
        <img className="logo__img" src={logo} alt="логотип Пенопласт Лидер" />
      </div>
    </div>
  );
};

export default Logo;
