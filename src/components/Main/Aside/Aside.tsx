import { useTypedDispatch, useTypedSelector } from '../../../store/main';
import { IFilter } from '../../../store/filterReducer';
import { toggleCheckbox } from '../../../store/actions';

import * as classes from './Aside.module.css';

export default function Aside() {
  const filters = useTypedSelector((state) => state.filterReducer.filters);
  const dispatch = useTypedDispatch();

  const filtersList = filters.map((filter: IFilter) => (
    <li key={filter.id} className={classes.item}>
      <label htmlFor={filter.id} className={classes.label}>
        <input
          type="checkbox"
          id={filter.id}
          checked={filter.checked}
          onChange={() => dispatch(toggleCheckbox(filter.id))}
          className={classes.checkbox}
        />
        {filter.label}
      </label>
    </li>
  ));

  return (
    <div className={classes.aside}>
      <h3 className={classes.title}>количество пересадок</h3>
      <ul className={classes.list}>{filtersList}</ul>
    </div>
  );
}
