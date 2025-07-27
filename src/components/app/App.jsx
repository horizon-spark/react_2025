import { Layout } from "../layout/Layout";
import { RestaurantsPage } from "../restaurants-page/RestaurantsPage";
import { restaurants } from "../../constants/mock";

import { ThemeContextProvider } from "../theme-context-provider/ThemeContextProvider";
import { UserContextProvider } from "../user-context-provider/UserContextProvider";

import { Provider } from "react-redux";
import { store } from "../../redux/store";

import "./reset.css";
import "./app.css";

const title = "Наши рестораны";

export const App = () => {
  return (
    <Provider store={store}>
      <UserContextProvider>
        <ThemeContextProvider>
          <Layout>
            <RestaurantsPage restaurants={restaurants} title={title} />
          </Layout>
        </ThemeContextProvider>
      </UserContextProvider>
    </Provider>
  );
};
