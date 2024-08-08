import { nanoid } from '@reduxjs/toolkit';

import { ITicket } from 'models/ticket';
import { useAppSelector } from 'store/hooks';
import filterTickets from 'utils/filterTickets';
import sortTickets from 'utils/sortTickets';

import Ticket from './Ticket/Ticket';
import * as classes from './TicketsList.module.css';

export default function TicketsList() {
  const { tickets } = useAppSelector((state) => state.ticketsSlice);
  const { filters } = useAppSelector((state) => state.filterSlice);
  const { buttons } = useAppSelector((state) => state.sortSlice);

  const filteredTickets = filterTickets(tickets, filters);
  const sortedTickets = sortTickets(filteredTickets, buttons);

  const { visibleTicketsNumber } = useAppSelector(
    (state) => state.ticketsSlice
  );
  const visibleTickets = sortedTickets.slice(0, visibleTicketsNumber);

  const ticketsList = visibleTickets.map((ticket: ITicket) => (
    <Ticket
      key={nanoid()}
      price={ticket.price}
      carrier={ticket.carrier}
      segments={ticket.segments}
    />
  ));

  const noFiltersChecked = filters.every((filter) => !filter.checked);

  return (
    <div>
      {noFiltersChecked && (
        <div className={classes.warning}>
          Рейсов, подходящих под заданные фильтры, не найдено
        </div>
      )}
      <ul className={classes.list}>{ticketsList}</ul>
    </div>
  );
}
