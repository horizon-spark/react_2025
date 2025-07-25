import { Counter } from "../../../counter/Counter";
import { useForm } from "./useForm";

import styles from "./ReviewForm.module.css";
import { Button } from "../../../button/Button";

const MIN_REVIEW_RATE = 1;
const MAX_REVIEW_RATE = 5;

export const ReviewForm = () => {
  const {
    form,
    setName,
    setText,
    incrementRating,
    decrementRating,
    clearForm,
  } = useForm();

  const { name, text, rating } = form;

  return (
    <>
      <form className={styles.reviewForm} onSubmit={(e) => e.preventDefault()}>
        <h3 className={styles.formHeader}>Пожалуйста, оставьте отзыв!</h3>
        <div>
          <div className={styles.fieldTitle}>Ваше имя</div>
          <input
            className={styles.inputName}
            placeholder="Введите ваше имя"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <div className={styles.fieldTitle}>Отзыв</div>
          <textarea
            className={styles.inputReview}
            placeholder="Оставьте отзыв"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </div>
        <div>
          <div className={styles.fieldTitle}>Оценка</div>
          <Counter
            value={rating}
            increment={incrementRating}
            decrement={decrementRating}
            MIN={MIN_REVIEW_RATE}
            MAX={MAX_REVIEW_RATE}
          />
        </div>
        <div>
          <Button
            text="Очистить форму"
            onClickAction={clearForm}
            externalCssClasses={styles.clearButton}
            isHoverGreen={false}
          />
        </div>
      </form>
    </>
  );
};
