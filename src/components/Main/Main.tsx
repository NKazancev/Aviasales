import Aside from './Aside/Aside';
import Tabs from './Tabs/Tabs';
import TicketsList from './TicketsList/TicketsList';
import ShowMoreButton from './ShowMoreButton/ShowMoreButton';
import * as classes from './Main.module.css';

export default function Main() {
  return (
    <main className={classes.main}>
      <Aside />
      <div className={classes.tickets}>
        <Tabs />
        <TicketsList />
        <ShowMoreButton />
      </div>
    </main>
  );
}
