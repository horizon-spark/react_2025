import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/slice";
import { DishListItem } from "./DishListItem";

export const DishListItemContainer = ({ dishId }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));
  return <DishListItem key={dishId} dish={dish} />;
};
