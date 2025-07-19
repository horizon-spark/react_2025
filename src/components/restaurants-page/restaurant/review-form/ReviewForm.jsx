import { Counter } from "../../../counter/Counter";
import { useForm } from "./useForm";

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
      <h3>Пожалуйста, оставьте отзыв!</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <div>Ваше имя</div>
          <input
            value={name}
            placeholder="Введите свое имя"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <div>Отзыв</div>
          <input
            value={text}
            placeholder="Оставьте отзыв"
            onChange={(event) => setText(event.target.value)}
          />
        </div>
        <div>
          <div>Оценка</div>
          <Counter
            value={rating}
            increment={incrementRating}
            decrement={decrementRating}
            MIN={MIN_REVIEW_RATE}
            MAX={MAX_REVIEW_RATE}
          />
        </div>
        <div>
          <button onClick={clearForm}>Очистить форму</button>
        </div>
      </form>
    </>
  );
};
