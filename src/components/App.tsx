import { useEffect } from 'react';

import { fetchTickets } from 'store/slices/ticketsSlice';
import { useAppDispatch } from 'store/hooks';

import fetchResource from '../utils/fetchResource';

import Header from './Header/Header';
import Main from './Main/Main';
import * as classes from './App.module.css';

export default function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchResource('https://aviasales-test-api.kata.academy/search').then(
      (data) => dispatch(fetchTickets(data.searchId))
    );
  }, [dispatch]);

  return (
    <div className={classes.app}>
      <Header />
      <Main />
    </div>
  );
}
