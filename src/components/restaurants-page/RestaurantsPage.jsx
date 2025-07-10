import { Restaurant } from "./restaurant/Restaurant";

export const RestaurantsPage = ({ restaurants, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      {restaurants.map((restaurant) => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};
