import logo from 'assets/main-logo.png';

import * as classes from './Header.module.css';

export default function Header() {
  return (
    <header className={classes.header}>
      <img src={logo} alt="logo-aviasales" />
    </header>
  );
}
