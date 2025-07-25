import { useContext } from "react";
import { UserContext } from "./UserContextProvider";

export const useAuthorization = () => useContext(UserContext);
