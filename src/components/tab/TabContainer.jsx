import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import { Tab } from "./Tab";
import { Link, useNavigate } from "react-router";

export const TabContainer = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId),
  );
  const navigate = useNavigate();

  if (!restaurant) {
    return null;
  }

  return (
    <Tab
      key={restaurantId}
      title={restaurant.name}
      onClick={() => {
        navigate(`${restaurantId}/menu`);
      }}
    />
  );
};
