import { Button } from "../../button/Button";
import { useTheme } from "../../theme-context-provider/useTheme";

import styles from "../Header.module.css";

export const ToggleThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      text={theme === "light" ? "Темная тема" : "Светлая тема"}
      onClickAction={toggleTheme}
      externalCssClasses={styles.headerButton}
    />
  );
};
