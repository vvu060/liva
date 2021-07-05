import { endpoints, headersPublic } from "../endpoints";
import axios from "axios";
import { cartItems } from "../redux/features/cart/cartSlice";
import { isLoading } from "../redux/features/loading/loadingSlice";

export const addToCart = (productId, dispatch, quantity) => {
  const cartId = localStorage.getItem("cart_id");

  const body = JSON.stringify({
    id: productId,
    quantity: quantity ? quantity : 1,
  });

  if (cartId) {
    addItemsToCart(cartId, body, dispatch);
  } else {
    createCart(body, dispatch);
  }
};

const createCart = async (body, dispatch) => {
  dispatch(isLoading(true));
  try {
    const { data } = await axios.get(`${endpoints.cart}`, {
      headers: headersPublic,
    });

    localStorage.setItem("cart_id", data.id);
    await addItemsToCart(data.id, body, dispatch);
    dispatch(isLoading(false));
  } catch (error) {
    alert(error.message);
  }
};

const addItemsToCart = async (cartId, body, dispatch) => {
  dispatch(isLoading(true));
  try {
    const { data } = await axios.post(`${endpoints.cart}/${cartId}`, body, {
      headers: headersPublic,
    });

    dispatch(cartItems(data.cart.line_items));
    dispatch(isLoading(false));
  } catch (error) {
    alert(error.message);
  }
};
