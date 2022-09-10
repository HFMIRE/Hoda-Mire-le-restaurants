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
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
