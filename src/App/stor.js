import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "../feature/counteriesSlice.js";
export const store = configureStore({
  reducer: {
    country: countriesReducer,
  },
});
