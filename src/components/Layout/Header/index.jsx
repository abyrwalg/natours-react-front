import React from 'react';

import logoWhite from '../../../assets/images/logo-white.png';

export default function Header() {
  return (
    <header className="header">
      <nav className="nav nav--tours">
        <a className="nav__el" href="/">
          All tours
        </a>
      </nav>
      <div className="header__logo">
        <img src={logoWhite} alt="Natours logo" />
      </div>
      <nav className="nav nav--user">
        {' '}
        <a className="nav__el" href="/login">
          Log in
        </a>
        <a className="nav__el nav__el-cta" href="/">
          Sign up
        </a>
      </nav>
    </header>
  );
}
