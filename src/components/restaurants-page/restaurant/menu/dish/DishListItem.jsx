import { useAuthorization } from "../../../../user-context-provider/useAuthorization";
import { DishCounter } from "./dish-counter/DishCounter";

import styles from "./DishListItem.module.css";

export const DishListItem = ({ dish }) => {
  const { isAuthorized } = useAuthorization();
  return (
    <li className={styles.listElement}>
      <span className={styles.dishName}>{dish.name}</span>
      {isAuthorized ? (
        <span className={styles.dishCounter}>
          <DishCounter />
        </span>
      ) : null}
    </li>
  );
};
