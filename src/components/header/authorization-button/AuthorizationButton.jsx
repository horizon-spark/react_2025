import { useAuthorization } from "../../user-context-provider/useAuthorization";

import style from "./AuthorizationButton.module.css";

export const AuthorizationButton = () => {
  const { isAuthorized, logIn, logOut } = useAuthorization();
  return isAuthorized ? (
    <>
      <button className={style.headerButton}>Username</button>
      <button className={style.headerButton} onClick={logOut}>
        Выйти
      </button>
    </>
  ) : (
    <button className={style.headerButton} onClick={logIn}>
      Войти
    </button>
  );
};
