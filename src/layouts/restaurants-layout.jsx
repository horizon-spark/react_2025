import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../redux/entities/restaurants/slice";
import { RestaurantsPage } from "../components/restaurants-page/RestaurantsPage";
import { Outlet } from "react-router";

export const RestaurantsLayout = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);

  return (
    <div>
      <RestaurantsPage restaurantsIds={restaurantsIds} />;
      <Outlet />;
    </div>
  );
};
