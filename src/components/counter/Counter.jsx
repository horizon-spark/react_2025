import classNames from "classnames";
import { useTheme } from "../theme-context-provider/useTheme";
import { Button } from "../button/Button";

import styles from "./Counter.module.css";

export const Counter = ({ value, increment, decrement, MIN, MAX }) => {
  const { theme } = useTheme();
  const buttonCssClasses = classNames(styles.button, {
    [styles.light]: theme === "light",
    [styles.dark]: theme === "dark",
  });
  return (
    <div>
      <Button
        text="-"
        onClickAction={decrement}
        isDisabled={value === MIN}
        externalCssClasses={classNames(buttonCssClasses, styles.decrement)}
      />
      <span> {value} </span>
      <Button
        text="+"
        onClickAction={increment}
        isDisabled={value === MAX}
        externalCssClasses={classNames(buttonCssClasses, styles.increment)}
      />
    </div>
  );
};
