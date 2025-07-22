import { Layout } from "../layout/Layout";
import { RestaurantsPage } from "../restaurants-page/RestaurantsPage";
import { restaurants } from "../../constants/mock";

import "./reset.css";
import "./app.css";

const title = "Наши рестораны";

export const App = () => {
  return (
    <Layout>
      <RestaurantsPage restaurants={restaurants} title={title} />
    </Layout>
  );
};
