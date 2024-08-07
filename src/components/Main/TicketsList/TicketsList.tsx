import { nanoid } from '@reduxjs/toolkit';

import { ITicket } from 'models/ticket';
import { useAppSelector } from 'store/hooks';

import Ticket from './Ticket/Ticket';
import * as classes from './TicketsList.module.css';

export default function TicketsList() {
  const { tickets } = useAppSelector((state) => state.ticketsSlice);
  const { visibleTicketsNumber } = useAppSelector(
    (state) => state.ticketsSlice
  );

  const visibleTickets = tickets.slice(0, visibleTicketsNumber);

  const ticketsList = visibleTickets.map((ticket: ITicket) => (
    <Ticket
      key={nanoid()}
      price={ticket.price}
      carrier={ticket.carrier}
      segments={ticket.segments}
    />
  ));

  return (
    <div>
      <ul className={classes.list}>{ticketsList}</ul>
    </div>
  );
}
