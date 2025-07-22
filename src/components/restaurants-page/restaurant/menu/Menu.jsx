import { DishListItem } from "./dish/DishListItem";

import styles from "./Menu.module.css";

export const Menu = ({ menu }) => {
  return (
    <ul className={styles.dishList}>
      {menu.map((dish) => (
        <DishListItem key={dish.id} dish={dish} />
      ))}
    </ul>
  );
};
