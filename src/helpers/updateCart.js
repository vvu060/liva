import { endpoints, headersPublic } from "../endpoints";
import axios from "axios";
import { cartItems, getTotalAmount } from "../redux/features/cart/cartSlice";
import { isLoading } from "../redux/features/loading/loadingSlice";

export const updateItem = async (qty, cartId, lineItemId, dispatch) => {
  dispatch(isLoading(true));
  const body = { quantity: qty };

  try {
    const { data } = await axios.put(
      `${endpoints.cart}/${cartId}/items/${lineItemId}`,
      body,
      {
        headers: headersPublic,
      }
    );
    dispatch(getTotalAmount(data.cart.subtotal.raw));
    dispatch(isLoading(false));
  } catch (error) {
    alert(error.message);
  }
};

export const removeItem = async (cartId, lineItemId, dispatch) => {
  dispatch(isLoading(true));
  try {
    const { data } = await axios.delete(
      `${endpoints.cart}/${cartId}/items/${lineItemId}`,
      {
        headers: headersPublic,
      }
    );
    dispatch(cartItems(data.cart.line_items));
    dispatch(getTotalAmount(data.cart.subtotal.raw));
    dispatch(isLoading(false));
  } catch (error) {
    alert(error.message);
  }
};
