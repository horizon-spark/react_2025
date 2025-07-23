import { Menu } from "./menu/Menu";
import { Reviews } from "./reviews/reviews";
import { ReviewForm } from "./review-form/ReviewForm";

import styles from "./Restaurant.module.css";
import { useAuthorization } from "../../user-context-provider/useAuthorization";

export const Restaurant = ({ restaurant }) => {
  const { isAuthorized } = useAuthorization();
  return (
    <div>
      <h2 className={styles.restaurantName}>{restaurant.name}</h2>
      <h3 className={styles.message}>Меню</h3>
      <Menu menu={restaurant.menu} />
      {restaurant.reviews.length ? (
        <>
          <h3 className={styles.message}>Отзывы</h3>
          <Reviews reviews={restaurant.reviews} />
        </>
      ) : (
        <div className={styles.message}>Нет отзывов</div>
      )}
      {isAuthorized ? <ReviewForm /> : null}
    </div>
  );
};
