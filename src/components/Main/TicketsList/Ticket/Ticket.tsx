import { ITicket } from 'models/ticket';
import logo from 'assets/s7-logo.png';

import * as classes from './Ticket.module.css';
import TicketSegment from './TicketSegment';

export default function Ticket(props: ITicket) {
  const { price, segments } = props;

  return (
    <li className={classes.ticket}>
      <div className={classes.price}>{price} Р</div>

      <div className={classes.logo}>
        <img src={logo} alt="s7-logo" />
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
