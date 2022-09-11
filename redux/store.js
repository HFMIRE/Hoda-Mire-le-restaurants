import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart.slice";
import { combineReducers } from "redux";
import { loadState } from "./browser-storage";
const reducer = combineReducers({
  cart: cartReducer,
});

const store = configureStore({
  devTools: true,
  reducer,
  preloadedState: loadState(),
});

export default store;
