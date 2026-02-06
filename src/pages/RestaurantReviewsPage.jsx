import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectRestaurantById } from "../redux/entities/restaurants/slice";
import { Reviews } from "../components/reviews/Reviews";

export const RestaurantReviewsPage = () => {
  const { restaurantId } = useParams();

  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId),
  );

  if (!restaurant?.name) {
    return null;
  }

  return <Reviews reviewsIds={restaurant.reviews} />;
};
