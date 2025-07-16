import { Review } from "./review/Review";

export const Reviews = ({ reviews }) => {
  return (
    <ul>
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </ul>
  );
};
