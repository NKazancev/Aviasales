import { tickets } from '../services/data';

import Header from './Header';
import Main from './Main';
import * as classes from './App.module.css';

export default function App() {
  return (
    <div className={classes.app}>
      <Header />
      <Main tickets={tickets} />
    </div>
  );
}
