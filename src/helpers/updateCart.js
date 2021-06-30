import { endpoints, headers } from "../endpoints";
import axios from "axios";
import { getTotalAmount } from "../redux/features/cart/cartSlice";
import { loading } from "../redux/features/loading/loadingSlice";

export const updateItem = async (qty, cartId, lineItemId, dispatch) => {
  dispatch(loading(true));
  const body = { quantity: qty };

  try {
    const { data } = await axios.put(
      `${endpoints.cart}/${cartId}/items/${lineItemId}`,
      body,
      {
        headers: headers,
      }
    );
    dispatch(getTotalAmount(data.cart.subtotal.formatted_with_symbol));
    dispatch(loading(false));
  } catch (error) {
    alert(error.message);
  }
};

export const removeItem = async (cartId, lineItemId) => {
  try {
    await axios.delete(`${endpoints.cart}/${cartId}/items/${lineItemId}`, {
      headers: headers,
    });
  } catch (error) {
    alert(error.message);
  }
};
