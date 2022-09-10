import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
export interface ItemState {
  _id: string;
  name: string;
  description: string;
  price: number;
  allergies: [string];
  type: string;
  image: string;
  quantity?: number | undefined;
}

const initialState: ItemState[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ItemState>) => {
      const itemExists = state.find((item) => {
        console.log("Iii", item);
        return item._id === action.payload._id;
      });
      if (itemExists) {
        itemExists.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
        if (typeof window !== "undefined") {
          localStorage.setItem("cart", JSON.stringify(state));
        }
      }
    },
    incrementQuantity: (state, action) => {
      console.log("action", action.payload);
      const item = state.find((item) => item._id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.find((item) => item._id === action.payload);
      if (item.quantity === 1) {
        const index = state.findIndex((item) => item._id === action.payload);
        state.splice(index, 1);
      } else {
        item.quantity--;
      }
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex((item) => item._id === action.payload);
      state.splice(index, 1);
    },
    removeAllFromCart: (state) => {
      // const index = state.findIndex((item) => item._id === action.payload);
      state.splice(0, state.length);
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  removeAllFromCart,
} = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.values;
