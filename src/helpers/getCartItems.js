import axios from "axios";
import { endpoints, headersPublic } from "../endpoints";
import { cartItems } from "../redux/features/cart/cartSlice";
import { loading } from "../redux/features/loading/loadingSlice";

export const getCartItems = async (cartId, dispatch) => {
  dispatch(loading(true));
  try {
    const { data } = await axios.get(`${endpoints.cart}/${cartId}`, {
      headers: headersPublic,
    });
    dispatch(cartItems(data));
  } catch (error) {
    alert(error.message);
  }
};
