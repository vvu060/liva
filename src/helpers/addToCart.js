import axios from "axios";
import { endpoints, headersPublic } from "../endpoints";
import { cartItems } from "../redux/features/cart/cartSlice";
import { isLoading } from "../redux/features/loading/loadingSlice";

/**
 * Function to check if cart id is available.
 * @function addToCart
 * @param {productId, dispatch, quantity}  - takes productId, dispatch, quantity as parameter.
 * @returns {} generates a cart id or adds item to cart.
 */
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

/**
 * Function to generate a cart Id.
 * @function createCart
 * @param {body, dispatch}  - takes  dispatch as parameter.
 * @returns {} generates a cart Id.
 */
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

/**
 * Function to add items to the cart.
 * @function addToCart
 * @param {productId, dispatch, quantity}  - takes productId, dispatch, quantity as parameter.
 * @returns {} adds item to cart.
 */
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
