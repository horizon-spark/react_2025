import { useParams } from "react-router";
import { Dish } from "../components/dish/Dish";

export const DishPage = () => {
  const { dishId } = useParams();

  if (!dishId) {
    return null;
  }

  return <Dish dishId={dishId} />;
};
