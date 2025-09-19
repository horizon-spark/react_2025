import { Menu } from "../menu/Menu";
import { Reviews } from "../reviews/Reviews";
import { ReviewForm } from "../review-form/ReviewForm";

import styles from "./Restaurant.module.css";
import { useAuthorization } from "../user-context-provider/useAuthorization";

export const Restaurant = ({ name, dishesIds, reviewsIds }) => {
  const { isAuthorized } = useAuthorization();
  return (
    <div>
      <h2 className={styles.restaurantName}>{name}</h2>
      <h3 className={styles.message}>Меню</h3>
      <Menu dishesIds={dishesIds} />
      {reviewsIds.length ? (
        <>
          <h3 className={styles.message}>Отзывы</h3>
          <Reviews reviewsIds={reviewsIds} />
        </>
      ) : (
        <div className={styles.message}>Нет отзывов</div>
      )}
      {isAuthorized ? <ReviewForm /> : null}
    </div>
  );
};
