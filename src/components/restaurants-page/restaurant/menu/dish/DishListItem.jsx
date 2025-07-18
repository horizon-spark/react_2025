import { DishCounter } from "./dish-counter/DishCounter";

export const DishListItem = ({ dish }) => {
  return (
    <li>
      {dish.name}
      <DishCounter />
    </li>
  );
};
