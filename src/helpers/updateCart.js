import { endpoints, headers } from "../endpoints";
import axios from "axios";

export const updateItem = async (qty, cartId, lineItemId) => {
  const body = { quantity: qty };

  try {
    await axios.put(`${endpoints.cart}/${cartId}/items/${lineItemId}`, body, {
      headers: headers,
    });
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
