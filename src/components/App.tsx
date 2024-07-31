import tickets from '../services/data';

import Header from './Header/Header';
import Main from './Main/Main';
import * as classes from './App.module.css';

export default function App() {
  return (
    <div className={classes.app}>
      <Header />
      <Main tickets={tickets} />
    </div>
  );
}
