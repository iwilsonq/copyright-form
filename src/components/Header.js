import React from 'react';
import shield from '../../img/shield_logo.png';

const Header = () => {
  return (
    <div className="header">
      <h1>PiraShield Copyright Infringement Form</h1>
      <img
        src={shield}
        alt="PiraShield"
        className="shield-logo"
      />
    </div>
  );
};

export default Header;
