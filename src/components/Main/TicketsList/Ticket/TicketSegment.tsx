import { ITicketSegment } from 'models/ticket';
import DateService from 'services/dateService';

import * as classes from './TicketSegment.module.css';

export default function TicketSegment(props: ITicketSegment) {
  const { origin, destination, date, duration, stops } = props;

  const dateService = new DateService(date, duration);

  const departureTime = dateService.getDepartureTime();
  const arrivalTime = dateService.getArrivalTime();
  const totalTime = dateService.getTotalTime();

  let transfers;
  if (!stops.length) transfers = 'без пересадок';
  if (stops.length === 1) transfers = '1 пересадка';
  if (stops.length > 1) transfers = `${stops.length} пересадки`;

  return (
    <ul className={classes.list}>
      <li className={classes.item}>
        <span className={classes.title}>
          {origin} - {destination}
        </span>
        <span className={classes.content}>
          {departureTime} - {arrivalTime}
        </span>
      </li>

      <li className={classes.item}>
        <span className={classes.title}>в пути</span>
        <span className={classes.content}>{totalTime}</span>
      </li>

      <li className={classes.item}>
        <span className={classes.title}>{transfers}</span>
        <span className={classes.content}>{stops.join(', ')}</span>
      </li>
    </ul>
  );
}
