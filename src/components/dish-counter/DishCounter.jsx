import { Counter } from "../counter/Counter";
import { useCount } from "../counter/useCounter";

const MIN = 0;
const MAX = 5;

export const DishCounter = ({ dishId }) => {
  const { value, increment, decrement } = useCount(dishId);
  return (
    <Counter
      value={value}
      increment={increment}
      decrement={decrement}
      MIN={MIN}
      MAX={MAX}
    />
  );
};
