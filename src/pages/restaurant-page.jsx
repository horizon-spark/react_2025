import { Outlet, useParams } from "react-router";
import { Restaurant } from "../components/restaurant/Restaurant";
import { ReviewForm } from "../components/review-form/ReviewForm";
import { useAuthorization } from "../components/user-context-provider/useAuthorization";

export const RestaurantPage = () => {
  const { restaurantId } = useParams();
  const { isAuthorized } = useAuthorization();

  if (!restaurantId) {
    return null;
  }

  return (
    <div>
      <Restaurant restaurantId={restaurantId} />
      <Outlet />
      {isAuthorized ? <ReviewForm /> : null}
    </div>
  );
};
