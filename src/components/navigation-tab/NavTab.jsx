import { useNavigate } from "react-router";
import { Tab } from "../tab/Tab";

export const NavTab = ({ destination, title }) => {
  const navigate = useNavigate();

  return (
    <Tab
      key={destination}
      title={title}
      onClick={() => {
        navigate(destination);
      }}
    />
  );
};
