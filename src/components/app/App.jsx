import { Layout } from "../layout/Layout";

import { ThemeContextProvider } from "../theme-context-provider/ThemeContextProvider";
import { UserContextProvider } from "../user-context-provider/UserContextProvider";

import { Provider } from "react-redux";
import { store } from "../../redux/store";

import "./reset.css";
import "./app.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { RestaurantsLayout } from "../../layouts/restaurants-layout";
import { RestaurantPage } from "../../pages/restaurant-page";
import { RestaurantMenuPage } from "../../pages/restaurant-menu-page";
import { RestaurantReviewsPage } from "../../pages/RestaurantReviewsPage";
import { DishesLayout } from "../../layouts/DishesLayout";
import { DishPage } from "../../pages/DishPage";
import { HomePage } from "../../pages/HomePage";
export const title = "Наши рестораны";

export const App = () => {
  return (
    <Provider store={store}>
      <UserContextProvider>
        <ThemeContextProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/restaurants" element={<RestaurantsLayout />}>
                  <Route path=":restaurantId" element={<RestaurantPage />}>
                    <Route path="menu" element={<RestaurantMenuPage />} />
                    <Route path="reviews" element={<RestaurantReviewsPage />} />
                  </Route>
                </Route>
                <Route path="*" element={<Navigate to={"/"} />} />
                <Route path="dish" element={<DishesLayout />}>
                  <Route path=":dishId" element={<DishPage />} />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeContextProvider>
      </UserContextProvider>
    </Provider>
  );
};
