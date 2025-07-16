import { Dish } from "./dish/Dish";

export const Menu = ({ menu }) => {
  return (
    <ul>
      {menu.map((dish) => (
        <Dish key={dish.id} dish={dish} />
      ))}
    </ul>
  );
};
