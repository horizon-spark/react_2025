import { createElement } from "react";
import { createRoot } from "react-dom/client";
import { restaurants } from "../mock";

const root = document.getElementById("root");

const reactRoot = createRoot(root);

const tmp = [1, 3, 5, 6, 7];

reactRoot.render(
  <ul className="style" style={{ color: "red" }}>
    {tmp.map((element) => {
      <li>{element}</li>;
    })}
  </ul>
);

reactRoot.render(
  <div>
    {restaurants.map((restaurant) => {
      <div>
        <h2>{restaurant.name}</h2>
        <h3>Меню</h3>
        <ul>
          {restaurant.menu.map((dish) => {
            <li>{dish.name}</li>;
          })}
        </ul>
        <h3>Отзывы</h3>
        <ul>
          {restaurant.reviews.map((review) => {
            <li>{review.text}</li>;
          })}
        </ul>
      </div>;
    })}
  </div>
);
