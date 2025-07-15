import { createRoot } from "react-dom/client";
import { restaurants } from "./constants/mock";
import { App } from "./components/app/App";

const root = document.getElementById("root");

const reactRoot = createRoot(root);

reactRoot.render(<App restaurants={restaurants} title={"Restaurants App"} />);
