import { Button } from "../../button/Button";
import { useAuthorization } from "../../user-context-provider/useAuthorization";

import style from "../Header.module.css";

export const AuthorizationButton = () => {
  const { isAuthorized, logIn, logOut } = useAuthorization();
  return isAuthorized ? (
    <>
      <Button text={"Username"} externalCssClasses={style.headerButton} />
      <Button
        text={"Выйти"}
        onClickAction={logOut}
        externalCssClasses={style.headerButton}
      />
    </>
  ) : (
    <Button
      text={"Войти"}
      onClickAction={logIn}
      externalCssClasses={style.headerButton}
    />
  );
};
