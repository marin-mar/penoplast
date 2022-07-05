import React from 'react';
import Logo from '../Logo/Logo.js';
import BusinessInfo from '../BusinessInfo/BusinessInfo.js';

import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <Logo classes="header__logo" />
      <BusinessInfo classes="header__business-info" />
    </header>
  );
};

export default Header;
