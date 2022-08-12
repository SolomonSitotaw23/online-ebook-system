import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart } from "./cart.utils";

const initialState = {
  isCartDropDownHidden: false,
  cartItems: [],
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCartDropDown: (state) => {
      state.isCartDropDownHidden = !state.isCartDropDownHidden;
    },
    addItem: (state, action) => {
      state.cartItems = addItemToCart(state.cartItems, action.payload);
    },
  },
});

export const { toggleCartDropDown, addItem } = cart.actions;

export default cart.reducer;
