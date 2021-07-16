import axios from "axios";

import { endpoints, headersPublic } from "../endpoints";

import { cartItems, getTotalAmount } from "../redux/features/cart/cartSlice";
import { isLoading } from "../redux/features/loading/loadingSlice";

/**
 * Function to handle item quantity modifications.
 * @function updateItem
 * @param { qty, cartId, lineItemId, dispatch } - takes qty, cartId, lineItemId, dispatch as parameter.
 * @returns {} updates the item quantity.
 */
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
    dispatch(cartItems(data.cart.line_items));
    dispatch(isLoading(false));
  } catch (error) {
    alert(error.message);
  }
};

/**
 * Function to remove item from the cart.
 * @function removeItem
 * @param { cartId, lineItemId, dispatch } - takes cartId, lineItemId, dispatch as parameter.
 * @returns {} updated cart.
 */
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
