import { Layout } from "../layout/Layout";

import { ThemeContextProvider } from "../theme-context-provider/ThemeContextProvider";
import { UserContextProvider } from "../user-context-provider/UserContextProvider";

import { Provider } from "react-redux";
import { store } from "../../redux/store";

import "./reset.css";
import "./app.css";
import { RestaurantsPageContainer } from "../restaurants-page/RestaurantsPageContainer";
export const title = "Наши рестораны";

export const App = () => {
  return (
    <Provider store={store}>
      <UserContextProvider>
        <ThemeContextProvider>
          <Layout>
            <RestaurantsPageContainer />
          </Layout>
        </ThemeContextProvider>
      </UserContextProvider>
    </Provider>
  );
};
