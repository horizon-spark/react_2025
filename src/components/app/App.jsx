import { Layout } from "../layout/layout";
import { RestaurantsPage } from "../restaurants-page/RestaurantsPage";
import { restaurants } from "../../constants/mock";

const title = "Restaurant App";

export const App = () => {
  return (
    <Layout>
      <RestaurantsPage restaurants={restaurants} title={title} />
    </Layout>
  );
};
