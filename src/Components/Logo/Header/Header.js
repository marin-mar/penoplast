import React from 'react';
import Logo from '../';

import './Header.scss';

const Header = () => {
	return (
    <header className="header">
      <Logo />
      <h2>header</h2>
    </header>
  );
};

export default Header;