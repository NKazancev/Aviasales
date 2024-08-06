import { useEffect } from 'react';

import { useAppDispatch } from 'hooks';
import { fetchTickets } from 'store/sliceTickets';

import tickets from '../services/data';

import Header from './Header/Header';
import Main from './Main/Main';
import * as classes from './App.module.css';

export default function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch('https://aviasales-test-api.kata.academy/search')
      .then((res) => res.json())
      .then((res) => dispatch(fetchTickets(res.searchId)));
  }, [dispatch]);

  return (
    <div className={classes.app}>
      <Header />
      <Main tickets={tickets} />
    </div>
  );
}
