import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItems: (state, action) => {
      state.items = [action.payload];
    },
  },
});

export const { addCartItems } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectCartId = (state) => state.cart.cartId;

export default cartSlice.reducer;
