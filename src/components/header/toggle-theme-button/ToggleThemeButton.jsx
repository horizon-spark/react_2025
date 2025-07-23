import { useState } from "react";
import { useTheme } from "../../theme-context-provider/useTheme";

import styles from "./ToggleThemeButton.module.css";

export const ToggleThemeButton = () => {
  const { theme, toggleTheme } = useTheme();
  const [themeButtonText, setThemeButtonText] = useState(
    theme === "light" ? "Темная тема" : "Светлая тема"
  );
  return (
    <button
      className={styles.headerButton}
      onClick={() => {
        toggleTheme();
        setThemeButtonText(
          themeButtonText === "Светлая тема" ? "Темная тема" : "Светлая тема"
        );
      }}
    >
      {themeButtonText}
    </button>
  );
};
