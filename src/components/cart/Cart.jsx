import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/entities/cart/slice";
import { CartDishElement } from "../cartDishElement/CartDishElement";

import styles from "./Cart.module.css";

export const Cart = () => {
  const items = useSelector(selectCartItems);

  if (!items.length) {
    return <div className={styles.cart}>Корзина пуста</div>;
  }
  return (
    <div className={styles.cart}>
      {items.map(({ id }) => (
        <CartDishElement key={id} id={id} />
      ))}
    </div>
  );
};
