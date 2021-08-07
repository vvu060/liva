import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: null,
  totalAmount: "0",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartItems: (state, action) => {
      state.items = action.payload;
    },
    getTotalAmount: (state, action) => {
      state.totalAmount = action.payload;
    },
  },
});

export const { cartItems, getTotalAmount } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectTotalAmount = (state) => state.cart.totalAmount;

export default cartSlice.reducer;
