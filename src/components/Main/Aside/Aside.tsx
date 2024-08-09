import { IFilter } from 'models/filter';
import { useAppSelector } from 'store/hooks';

import Filter from './Filter/Filter';
import * as classes from './Aside.module.css';

export default function Aside() {
  const filters = useAppSelector((state) => state.filterSlice.filters);

  const filtersList = filters.map((filter: IFilter) => {
    return (
      <Filter
        key={filter.id}
        id={filter.id}
        checked={filter.checked}
        label={filter.label}
      />
    );
  });

  return (
    <div className={classes.aside}>
      <h3 className={classes.title}>количество пересадок</h3>
      <ul className={classes.list}>{filtersList}</ul>
    </div>
  );
}
