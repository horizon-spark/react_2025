import { Review } from "./review/Review";

export const Reviews = ({ restaurant }) => {
  return (
    <ul>
      {restaurant.reviews.map((review) => (
        <Review review={review} />
      ))}
    </ul>
  );
};
