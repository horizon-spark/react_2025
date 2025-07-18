import { Counter } from "../../../../../counter/Counter";
import { useCount } from "../../../../../counter/useCounter";

const MIN = 0;
const MAX = 5;

export const DishCounter = () => {
  const { value, increment, decrement } = useCount();
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
