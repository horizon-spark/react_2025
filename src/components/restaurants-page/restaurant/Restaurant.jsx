import { Menu } from "./menu/Menu";
import { Reviews } from "./reviews/reviews";

export const Restaurant = ({ restaurant }) => {
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <h3>Меню</h3>
      <Menu menu={restaurant.menu} />
      {restaurant.reviews.length ? (
        <>
          <h3>Отзывы</h3>
          <Reviews reviews={restaurant.reviews} />
        </>
      ) : (
        <div>Нет отзывов</div>
      )}
    </div>
  );
};
