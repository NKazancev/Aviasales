import Aside from './Aside/Aside';
import Tabs from './Tabs/Tabs';
import TicketsList, { ITickets } from './Tickets/TicketsList';
import ShowButton from './Buttons/ShowMoreButton';
import * as classes from './Main.module.css';

export default function Main(props: ITickets) {
  const { tickets } = props;

  return (
    <main className={classes.main}>
      <Aside />
      <div className={classes.tickets}>
        <Tabs />
        <TicketsList tickets={tickets} />
        <ShowButton />
      </div>
    </main>
  );
}
