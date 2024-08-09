import { IFilter } from 'models/filter';
import { useAppDispatch } from 'store/hooks';
import { toggleCheckbox } from 'store/slices/filterSlice';

import * as classes from './Filter.module.css';

export default function Filter(props: IFilter) {
  const { id, label, checked } = props;

  const dispatch = useAppDispatch();

  return (
    <li className={classes.item}>
      <label htmlFor={id} className={classes.label}>
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={() => dispatch(toggleCheckbox(id))}
          className={classes.checkbox}
        />
        {label}
      </label>
    </li>
  );
}
