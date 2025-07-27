import classNames from "classnames";
import { Button } from "../button/Button";

import styles from "./Counter.module.css";

export const Counter = ({ value, increment, decrement, MIN, MAX }) => {
  return (
    <div>
      <Button
        text="-"
        onClickAction={decrement}
        isDisabled={value === MIN}
        externalCssClasses={classNames(styles.button, styles.decrement)}
        isHoverGreen={false}
      />
      <span> {value} </span>
      <Button
        text="+"
        onClickAction={increment}
        isDisabled={value === MAX}
        externalCssClasses={classNames(styles.button, styles.increment)}
      />
    </div>
  );
};
