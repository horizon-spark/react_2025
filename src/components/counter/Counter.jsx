import classNames from "classnames";
import { useTheme } from "../theme-context-provider/useTheme";

import styles from "./Counter.module.css";

export const Counter = ({ value, increment, decrement, MIN, MAX }) => {
  const { theme } = useTheme();
  return (
    <div>
      <button
        className={classNames(styles.button, styles.decrement, {
          [styles.light]: theme === "light",
          [styles.dark]: theme === "dark",
        })}
        onClick={decrement}
        disabled={value === MIN}
      >
        -
      </button>
      <span> {value} </span>
      <button
        className={classNames(styles.button, styles.increment, {
          [styles.light]: theme === "light",
          [styles.dark]: theme === "dark",
        })}
        onClick={increment}
        disabled={value === MAX}
      >
        +
      </button>
    </div>
  );
};
