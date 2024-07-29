import Aside from './Aside';
import * as classes from './Main.module.css';
import ShowButton from './ShowButton';
import Tabs from './Tabs';
import TicketsList, { ITickets } from './TicketsList';

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
