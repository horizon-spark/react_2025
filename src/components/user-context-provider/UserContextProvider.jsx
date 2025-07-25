import { createContext, useState } from "react";

export const UserContext = createContext({
  isAuthorized: false,
  logIn: () => {},
  logOut: () => {},
});

export const UserContextProvider = ({ children }) => {
  const [isAuthorized, setAuthorization] = useState(false);
  const logIn = () => {
    setAuthorization(true);
  };
  const logOut = () => {
    setAuthorization(false);
  };
  return (
    <UserContext value={{ isAuthorized, logIn, logOut }}>
      {children}
    </UserContext>
  );
};
