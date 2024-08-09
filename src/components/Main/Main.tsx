import { useAppSelector } from 'store/hooks';

import Aside from './Aside/Aside';
import Tabs from './Tabs/Tabs';
import Loader from './Loader/Loader';
import TicketsList from './TicketsList/TicketsList';
import * as classes from './Main.module.css';

export default function Main() {
  const { loadingStatus } = useAppSelector((state) => state.ticketsSlice);

  return (
    <main className={classes.main}>
      <Aside />
      <div className={classes.content}>
        <Tabs />
        {loadingStatus === 'pending' && <Loader />}
        <TicketsList />
      </div>
    </main>
  );
}
