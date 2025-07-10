import { Dish } from "./dish/Dish";

export const Menu = ({ restaurant }) => {
  return (
    <ul>
      {restaurant.menu.map((dish) => (
        <Dish dish={dish} />
      ))}
    </ul>
  );
};
