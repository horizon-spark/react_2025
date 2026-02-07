import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/slice";

import styles from "./Dish.module.css";

import { useAuthorization } from "../user-context-provider/useAuthorization";
import { DishCounter } from "../dish-counter/DishCounter";

export const Dish = ({ dishId }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));
  const { isAuthorized } = useAuthorization();

  if (!dish?.name) {
    return null;
  }

  return (
    <div className={styles.dishCard}>
      <div className={styles.dishName}>{dish.name}</div>
      {isAuthorized ? (
        <div className={styles.dishInfo}>
          <span className={styles.dishText}>Количество</span>
          <DishCounter dishId={dish.id} />
        </div>
      ) : null}
      <span className={styles.dishText}>Цена: {dish.price}</span>
      <ul>
        <span className={styles.dishText}>Состав блюда:</span>
        {dish.ingredients.map((ingredient, index) => (
          <li className={styles.dishListItem} key={index}>
            {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
};
