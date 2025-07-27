import { configureStore } from "@reduxjs/toolkit";
import { restaurantsSlice } from "./entities/restaurants/slice";

export const store = configureStore({
  reducer: {
    [restaurantsSlice.name]: restaurantsSlice.reducer,
  },
});
