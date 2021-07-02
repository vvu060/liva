import axios from "axios";
import { endpoints, headersPublic } from "../endpoints";
import { cartItems } from "../redux/features/cart/cartSlice";
import { isLoading } from "../redux/features/loading/loadingSlice";
import { isError } from "../redux/features/loading/errorSlice";

export const getCartItems = async (cartId, dispatch) => {
  dispatch(isLoading(true));
  try {
    const { data } = await axios.get(`${endpoints.cart}/${cartId}`, {
      headers: headersPublic,
    });

    dispatch(cartItems(data));
    dispatch(isLoading(false));
  } catch (error) {
    dispatch(isError(true));
  }
};
