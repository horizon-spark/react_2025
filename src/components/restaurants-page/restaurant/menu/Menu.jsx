import { DishListItem } from "./dish/DishListItem";

export const Menu = ({ menu }) => {
  return (
    <ul>
      {menu.map((dish) => (
        <DishListItem key={dish.id} dish={dish} />
      ))}
    </ul>
  );
};
