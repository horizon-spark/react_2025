import { DishListItemContainer } from "../dish/DishListItemContainer";

import styles from "./Menu.module.css";

export const Menu = ({ dishesIds }) => {
  return (
    <ul className={styles.dishList}>
      {dishesIds.map((dishId) => (
        <DishListItemContainer key={dishId} dishId={dishId} />
      ))}
    </ul>
  );
};
