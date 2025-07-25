import { Layout } from "../layout/Layout";
import { RestaurantsPage } from "../restaurants-page/RestaurantsPage";
import { restaurants } from "../../constants/mock";

import "./reset.css";
import "./app.css";
import { ThemeContextProvider } from "../theme-context-provider/ThemeContextProvider";
import { UserContextProvider } from "../user-context-provider/UserContextProvider";

const title = "Наши рестораны";

export const App = () => {
  return (
    <UserContextProvider>
      <ThemeContextProvider>
        <Layout>
          <RestaurantsPage restaurants={restaurants} title={title} />
        </Layout>
      </ThemeContextProvider>
    </UserContextProvider>
  );
};
