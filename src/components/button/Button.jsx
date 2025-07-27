import classNames from "classnames";
import { useTheme } from "../theme-context-provider/useTheme";

import styles from "./Button.module.css";

export const Button = ({
  text,
  onClickAction = () => {},
  isDisabled = false,
  externalCssClasses,
  isHoverGreen = true,
}) => {
  const { theme } = useTheme();

  return (
    <button
      onClick={onClickAction}
      disabled={isDisabled}
      className={classNames(styles.buttonClass, externalCssClasses, {
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark",
        [styles.greenHover]: isHoverGreen,
        [styles.redHover]: !isHoverGreen,
      })}
    >
      {text}
    </button>
  );
};
