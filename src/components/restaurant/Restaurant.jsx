import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import { NavTab } from "../navigation-tab/NavTab";

import styles from "./Restaurant.module.css";

export const Restaurant = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId),
  );

  if (!restaurant?.name) {
    return null;
  }

  return (
    <div>
      <h2 className={styles.restaurantName}>{restaurant.name}</h2>
      <div className={styles.tabs}>
        <NavTab destination={"menu"} title={"Меню"} />
        <NavTab destination={"reviews"} title={"Отзывы"} />
      </div>
    </div>
  );
};
