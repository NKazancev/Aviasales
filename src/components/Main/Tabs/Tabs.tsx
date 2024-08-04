import { useTypedDispatch, useTypedSelector } from '../../../store/main';
import { ISortButton } from '../../../store/sortReducer';
import { setSortButton } from '../../../store/actions';

import * as classes from './Tabs.module.css';

export default function Tabs() {
  const sortButtons = useTypedSelector((state) => state.sortReducer.buttons);
  const dispatch = useTypedDispatch();

  const activeButton = `${classes.button} ${classes.active}`;

  const sortButtonsList = sortButtons.map((button: ISortButton) => {
    return (
      <li key={button.id} className={classes.item}>
        <button
          type="button"
          className={!button.active ? classes.button : activeButton}
          onClick={() => dispatch(setSortButton(button.id))}
        >
          {button.text}
        </button>
      </li>
    );
  });

  return <ul className={classes.list}>{sortButtonsList}</ul>;
}
