import { useDispatch } from 'react-redux';

import { showMoreTickets } from 'store/slices/ticketsSlice';

import * as classes from './ShowMoreButton.module.css';

export default function ShowMoreButton() {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      onClick={() => dispatch(showMoreTickets())}
      className={classes.button}
    >
      показать еще пять билетов!
    </button>
  );
}
