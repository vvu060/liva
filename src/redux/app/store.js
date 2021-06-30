import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import sidebarReducer from "../features/sidebar/sidebarSlice";
import cartReducer from "../features/cart/cartSlice";
import loadingReducer from "../features/loading/loadingSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    sidebar: sidebarReducer,
    cart: cartReducer,
    loading: loadingReducer,
  },
});
