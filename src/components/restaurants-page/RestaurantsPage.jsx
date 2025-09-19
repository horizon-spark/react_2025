import { useState } from "react";
import { ProgressBar } from "../progress-bar/ProgressBar";
import { title } from "../app/App";

import styles from "./RestaurantPage.module.css";
import { TabContainer } from "../tab/TabContainer";
import { RestaurantContainer } from "../restaurant/RestaurantContainer";
import { Cart } from "../cart/cart";
import { useAuthorization } from "../user-context-provider/useAuthorization";

export const RestaurantsPage = ({ restaurantsIds }) => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurantsIds[0]
  );
  const { isAuthorized } = useAuthorization();

  return (
    <div>
      <ProgressBar />
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.tabs}>
        {restaurantsIds.map((id) => (
          <TabContainer
            key={id}
            restaurantId={id}
            onClick={() => setActiveRestaurantId(id)}
            isActive={id === activeRestaurantId}
          />
        ))}
      </div>
      <RestaurantContainer
        key={activeRestaurantId}
        restaurantId={activeRestaurantId}
      />
      {isAuthorized ? (
        <div>
          <div className={styles.cartTitle}>Корзина</div>
          <Cart />
        </div>
      ) : null}
    </div>
  );
};
