import { ReviewListItem } from "../review/ReviewListItem";
import { ReviewListItemContainer } from "../review/ReviewListItemContainer";

import styles from "./Reviews.module.css";

export const Reviews = ({ reviewsIds }) => {
  return (
    <ul className={styles.reviewList}>
      {reviewsIds.map((reviewId) => (
        <ReviewListItemContainer key={reviewId} reviewId={reviewId} />
      ))}
    </ul>
  );
};
