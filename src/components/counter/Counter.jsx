import { useState } from "react";

const MIN = 0;
const MAX = 5;

export const Counter = () => {
  const [value, setValue] = useState(0);

  const increment = () => setValue(value + 1);
  const decrement = () => setValue(value - 1);

  return (
    <div>
      <button onClick={decrement} disabled={value === MIN}>
        -
      </button>
      <span>{value}</span>
      <button onClick={increment} disabled={value === MAX}>
        +
      </button>
    </div>
  );
};
