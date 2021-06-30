import { endpoints, headers } from "../endpoints";
import axios from "axios";
import { addCartItems } from "../redux/features/cart/cartSlice";

export const addToCart = (productId, dispatch) => {
  const cartId = localStorage.getItem("cart_id");

  const body = JSON.stringify({
    id: productId,
    quantity: 1,
  });

  if (cartId) {
    addItemsToCart(cartId, body, dispatch);
  } else {
    createCart(body);
  }
};

const createCart = async (body) => {
  const { data } = await axios.get(`${endpoints.cart}`, { headers: headers });

  localStorage.setItem("cart_id", data.id);

  await addItemsToCart(data.id, body);
};

const addItemsToCart = async (cartId, body, dispatch) => {
  const { data } = await axios.post(`${endpoints.cart}/${cartId}`, body, {
    headers: headers,
  });

  dispatch(addCartItems(data.cart));
};
