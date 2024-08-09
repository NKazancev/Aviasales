import { ITicket } from 'models/ticket';

import TicketSegment from './TicketSegment';
import * as classes from './Ticket.module.css';

export default function Ticket(props: ITicket) {
  const { price, carrier, segments } = props;

  const imgUrl = 'https://pics.avs.io/99/36/';

  return (
    <li className={classes.ticket}>
      <div className={classes.price}>{price} Р</div>

      <div className={classes.logo}>
        <img src={`${imgUrl}${carrier}.png`} alt="logo" />
      </div>

      <div className={classes.wayThere}>
        <TicketSegment
          origin={segments[0].origin}
          destination={segments[0].destination}
          date={segments[0].date}
          duration={segments[0].duration}
          stops={segments[0].stops}
        />
      </div>

      <div className={classes.wayBack}>
        <TicketSegment
          origin={segments[1].origin}
          destination={segments[1].destination}
          date={segments[1].date}
          duration={segments[1].duration}
          stops={segments[1].stops}
        />
      </div>
    </li>
  );
}
