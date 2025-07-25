import { Button } from "../../button/Button";

import styles from "./Tab.module.css";

export const Tab = ({ title, onClick, isActive }) => {
  return (
    <Button
      text={title}
      onClickAction={onClick}
      isDisabled={isActive}
      externalCssClasses={styles.tab}
    />
  );
};
