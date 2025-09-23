import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import { Tab } from "./Tab";

export const TabContainer = ({ restaurantId, onClick, isActive }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurant) {
    return null;
  }

  return (
    <Tab
      key={restaurantId}
      title={restaurant.name}
      onClick={onClick}
      isActive={isActive}
    />
  );
};
