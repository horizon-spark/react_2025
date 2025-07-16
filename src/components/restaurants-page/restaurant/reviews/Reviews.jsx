import { ReviewListItem } from "./review/ReviewListItem";

export const Reviews = ({ reviews }) => {
  return (
    <ul>
      {reviews.map((review) => (
        <ReviewListItem key={review.id} review={review} />
      ))}
    </ul>
  );
};
