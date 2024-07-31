import * as classes from './Aside.module.css';

export interface IFilter {
  id: string;
  label: string;
}

export default function Aside() {
  const filters: Array<IFilter> = [
    { id: '1', label: 'Все' },
    { id: '2', label: 'Без пересадок' },
    { id: '3', label: '1 пересадка' },
    { id: '4', label: '2 пересадки' },
    { id: '5', label: '3 пересадки' },
  ];

  const filtersList = filters.map((filter) => (
    <li key={filter.id} className={classes.item}>
      <label htmlFor={filter.id} className={classes.label}>
        <input type="checkbox" id={filter.id} className={classes.checkbox} />
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
