import { DishCounter } from "./dish-counter/DishCounter";

import styles from "./DishListItem.module.css";

export const DishListItem = ({ dish }) => {
  return (
    <li className={styles.listElement}>
      <span className={styles.dishName}>{dish.name}</span>
      <span className={styles.dishCounter}>
        <DishCounter />
      </span>
    </li>
  );
};
