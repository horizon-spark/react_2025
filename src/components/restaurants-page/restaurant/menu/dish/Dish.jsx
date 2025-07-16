import { Counter } from "../../../../counter/Counter";

export const Dish = ({ dish }) => {
  return (
    <>
      <li>{dish.name}</li>
      <Counter />
    </>
  );
};
