import { useState } from "react";

export const useCount = (INITIAL_VALUE = 0) => {
  const [value, setValue] = useState(INITIAL_VALUE);

  const increment = () => {
    setValue(value + 1);
  };
  const decrement = () => {
    setValue(value - 1);
  };

  return {
    value,
    increment,
    decrement,
  };
};
