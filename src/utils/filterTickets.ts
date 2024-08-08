import { ITicket } from 'models/ticket';
import { IFilter } from 'models/filter';

export default function filterTickets(
  tickets: Array<ITicket>,
  filters: Array<IFilter>
) {
  return tickets.filter((ticket) => {
    const activeFilters = filters.filter((el) => el.checked);
    const transfersThere = ticket.segments[0].stops.length;
    const transfersBack = ticket.segments[1].stops.length;
    const totalTransfers = transfersThere + transfersBack;

    return activeFilters.some((el) => el.stops === totalTransfers);
  });
}
