import logo from '../assets/main-logo.png';

import * as classes from './Header.module.css';

export default function Header() {
  return (
    <div className={classes.container}>
      <img src={logo} alt="logo-aviasales" />
    </div>
  );
}
