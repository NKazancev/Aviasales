import Ticket, { ITicket } from './Ticket';
import * as classes from './TicketsList.module.css';

export interface ITickets {
  tickets: Array<ITicket>;
}

export default function TicketsList(props: ITickets) {
  const { tickets } = props;

  const ticketsList = tickets.map((ticket) => (
    <Ticket
      key={ticket.id}
      id={ticket.id}
      price={ticket.price}
      destinationsThere={ticket.destinationsThere}
      destinationsBack={ticket.destinationsBack}
      timeThere={ticket.timeThere}
      totalTimeThere={ticket.totalTimeThere}
      timeBack={ticket.timeBack}
      totalTimeBack={ticket.totalTimeBack}
      transfersNumberThere={ticket.transfersNumberThere}
      transferPlacesThere={ticket.transferPlacesThere}
      transfersNumberBack={ticket.transfersNumberBack}
      transferPlacesBack={ticket.transferPlacesBack}
    />
  ));

  return (
    <div>
      <ul className={classes.list}>{ticketsList}</ul>
    </div>
  );
}
