import logo from 'assets/s7-logo.png';

import * as classes from './Ticket.module.css';

export interface ITicket {
  id: number;
  price: number;
  destinationsThere: string;
  destinationsBack: string;
  timeThere: string;
  totalTimeThere: string;
  timeBack: string;
  totalTimeBack: string;
  transfersNumberThere: number;
  transferPlacesThere: string;
  transfersNumberBack: number;
  transferPlacesBack: string;
}

export default function Ticket(props: ITicket) {
  const {
    price,
    destinationsThere,
    destinationsBack,
    timeThere,
    totalTimeThere,
    timeBack,
    totalTimeBack,
    transfersNumberThere,
    transferPlacesThere,
    transfersNumberBack,
    transferPlacesBack,
  } = props;

  return (
    <li className={classes.ticket}>
      <div className={classes.price}>{price} Р</div>

      <div className={classes.logo}>
        <img src={logo} alt="s7-logo" />
      </div>

      <ul className={classes.wayThere}>
        <li className={classes.item}>
          <span className={classes.title}>{destinationsThere}</span>
          <span className={classes.content}>{timeThere}</span>
        </li>

        <li className={classes.item}>
          <span className={classes.title}>в пути</span>
          <span className={classes.content}>{totalTimeThere}</span>
        </li>

        <li className={classes.item}>
          <span className={classes.title}>
            {transfersNumberThere}{' '}
            {transfersNumberThere > 1 ? 'пересадки' : 'пересадка'}
          </span>
          <span className={classes.content}>{transferPlacesThere}</span>
        </li>
      </ul>

      <ul className={classes.wayBack}>
        <li className={classes.item}>
          <span className={classes.title}>{destinationsBack}</span>
          <span className={classes.content}>{timeBack}</span>
        </li>

        <li className={classes.item}>
          <span className={classes.title}>в пути</span>
          <span className={classes.content}>{totalTimeBack}</span>
        </li>

        <li className={classes.item}>
          <span className={classes.title}>
            {transfersNumberBack}{' '}
            {transfersNumberBack > 1 ? 'пересадки' : 'пересадка'}
          </span>
          <span className={classes.content}>{transferPlacesBack}</span>
        </li>
      </ul>
    </li>
  );
}
