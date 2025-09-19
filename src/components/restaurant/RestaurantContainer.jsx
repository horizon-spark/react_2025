import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import { Restaurant } from "./Restaurant";

export const RestaurantContainer = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurant?.name) {
    return null;
  }

  return (
    <Restaurant
      key={restaurantId}
      name={restaurant.name}
      dishesIds={restaurant.menu}
      reviewsIds={restaurant.reviews}
    />
  );
};
