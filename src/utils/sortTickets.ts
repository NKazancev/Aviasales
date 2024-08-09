import { ITicket } from 'models/ticket';
import { ISortButton } from 'models/sort';

export default function sortTickets(
  tickets: Array<ITicket>,
  buttons: Array<ISortButton>
) {
  const activeButton = buttons.find((el) => el.active);

  let sortedTickets = tickets;

  switch (activeButton?.text) {
    case 'самый дешевый':
      sortedTickets = tickets.toSorted((a, b) => {
        return a.price > b.price ? 1 : -1;
      });
      break;
    case 'самый быстрый':
      sortedTickets = tickets.toSorted((a, b) => {
        const durationA = a.segments[0].duration + a.segments[1].duration;
        const durationB = b.segments[0].duration + b.segments[1].duration;
        return durationA > durationB ? 1 : -1;
      });
      break;
    case 'оптимальный':
      sortedTickets = tickets.toSorted((a, b) => {
        const durationA = a.segments[0].duration + a.segments[1].duration;
        const durationB = b.segments[0].duration + b.segments[1].duration;
        return a.price + durationA > b.price + durationB ? 1 : -1;
      });
      break;
    default:
      return sortedTickets;
  }

  return sortedTickets;
}
