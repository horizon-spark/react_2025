import { Counter } from "../../../../counter/Counter";

export const DishListItem = ({ dish }) => {
  return (
    <li>
      {dish.name}
      <Counter />
    </li>
  );
};
