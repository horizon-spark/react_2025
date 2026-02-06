import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectRestaurantById } from "../redux/entities/restaurants/slice";
import { Menu } from "../components/menu/Menu";

export const RestaurantMenuPage = () => {
  const { restaurantId } = useParams();

  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId),
  );

  if (!restaurant?.name) {
    return null;
  }

  return <Menu dishesIds={restaurant.menu} />;
};
