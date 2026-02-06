import { NavTab } from "../navigation-tab/NavTab";

import styles from "./HomePageContent.module.css";

export const HomePageContent = () => {
  return (
    <div className={styles.page}>
      <h2 className={styles.title}>Добро пожаловать!</h2>
      <NavTab destination={"restaurants"} title={"Выбрать ресторан"} />
    </div>
  );
};
