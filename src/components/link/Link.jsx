import { Link as RouterLink } from "react-router";

export const Link = ({ children, to }) => {
  return <RouterLink to={to}>{children}</RouterLink>;
};
