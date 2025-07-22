import styles from "./Counter.module.css";

export const Counter = ({ value, increment, decrement, MIN, MAX }) => {
  return (
    <div>
      <button
        className={styles.decrement}
        onClick={decrement}
        disabled={value === MIN}
      >
        -
      </button>
      <span> {value} </span>
      <button
        className={styles.increment}
        onClick={increment}
        disabled={value === MAX}
      >
        +
      </button>
    </div>
  );
};
