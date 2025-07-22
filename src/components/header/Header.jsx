import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <button className={styles.headerButton}>Главная</button>
      <button className={styles.headerButton}>О нас</button>
      <button className={styles.headerButton}>Личный кабинет</button>
    </div>
  );
};
