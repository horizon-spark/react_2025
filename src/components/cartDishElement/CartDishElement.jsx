import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/slice";

import styles from "./cartDishElement.module.css";
import { DishCounter } from "../dish-counter/DishCounter";

export const CartDishElement = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));
  return (
    <div className={styles.dishElement}>
      <div className={styles.dishName}>{dish.name}</div>
      <span className={styles.dishAmount}>
        <DishCounter dishId={id} />
      </span>
    </div>
  );
};
