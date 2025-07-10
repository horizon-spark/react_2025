import { Layout } from "../layout/layout";
import { RestaurantsPage } from "../restaurants-page/RestaurantsPage";

export const App = ({ restaurants, title }) => {
  return (
    <Layout>
      <RestaurantsPage restaurants={restaurants} title={title} />
    </Layout>
  );
};
