import { ReviewListItem } from "./review/ReviewListItem";

import styles from "./Reviews.module.css";

export const Reviews = ({ reviews }) => {
  return (
    <ul className={styles.reviewList}>
      {reviews.map((review) => (
        <ReviewListItem key={review.id} review={review} />
      ))}
    </ul>
  );
};
