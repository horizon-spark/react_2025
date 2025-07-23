import classNames from "classnames";
import styles from "./Tab.module.css";
import { useTheme } from "../../theme-context-provider/useTheme";

export const Tab = ({ title, onClick, isActive }) => {
  const { theme } = useTheme();

  return (
    <button
      className={classNames(styles.tab, {
        [styles.dark]: theme === "dark",
        [styles.light]: theme === "light",
      })}
      onClick={onClick}
      disabled={isActive}
    >
      {title}
    </button>
  );
};
