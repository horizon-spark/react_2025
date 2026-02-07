import { useAuthorization } from "../user-context-provider/useAuthorization";
import { DishCounter } from "../dish-counter/DishCounter";

import styles from "./DishListItem.module.css";
import { Link } from "react-router";

export const DishListItem = ({ dish }) => {
  const { isAuthorized } = useAuthorization();
  return (
    <li className={styles.listElement}>
      <span className={styles.dishName}>
        <Link to={`/dish/${dish.id}`}>{dish.name}</Link>
      </span>
      {isAuthorized ? (
        <span className={styles.dishCounter}>
          <DishCounter dishId={dish.id} />
        </span>
      ) : null}
    </li>
  );
};
