export const Counter = ({ value, increment, decrement, MIN, MAX }) => {
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
