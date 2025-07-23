import { AuthorizationButton } from "./authorization-button/AuthorizationButton";
import { ToggleThemeButton } from "./toggle-theme-button/ToggleThemeButton";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <AuthorizationButton />
      <ToggleThemeButton />
    </div>
  );
};
