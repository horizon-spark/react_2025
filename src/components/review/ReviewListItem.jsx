import styles from "./ReviewListItem.module.css";

export const ReviewListItem = ({ review }) => {
  return <li className={styles.listItem}>{review.text}</li>;
};
