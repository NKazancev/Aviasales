import * as classes from './Tabs.module.css';

export default function Tabs() {
  return (
    <ul className={classes.list}>
      <li className={classes.item}>самый дешевый</li>
      <li className={classes.item}>самый быстрый</li>
      <li className={classes.item}>оптимальный</li>
    </ul>
  );
}
