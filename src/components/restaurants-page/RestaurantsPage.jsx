import { useState } from "react";
import { Tab } from "./tab/Tab";
import { Restaurant } from "./restaurant/Restaurant";
import { ProgressBar } from "./progress-bar/ProgressBar";

import styles from "./RestaurantPage.module.css";

export const RestaurantsPage = ({ restaurants, title }) => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurants[0].id
  );

  const activeRestaurant = restaurants.find(
    ({ id }) => id === activeRestaurantId
  );

  const handleActiveRestaurantClick = (id) => {
    if (activeRestaurantId === id) return;

    setActiveRestaurantId(id);
  };

  return (
    <div>
      <ProgressBar />
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.tabs}>
        {restaurants.map(({ name, id, menu }) =>
          menu.length ? (
            <Tab
              key={id}
              title={name}
              onClick={() => handleActiveRestaurantClick(id)}
              isActive={id === activeRestaurantId}
            />
          ) : null
        )}
      </div>
      <Restaurant key={activeRestaurant.id} restaurant={activeRestaurant} />
    </div>
  );
};
