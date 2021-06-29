import { endpoints, headers } from "../endpoints";
import axios from "axios";

export const addToCart = (productId) => {
  const cartId = localStorage.getItem("cart_id");

  const body = JSON.stringify({
    id: productId,
    quantity: 1,
  });

  if (cartId) {
    addItemsToCart(cartId, body);
  } else {
    createCart(body);
  }
};

const createCart = async (body) => {
  const { data } = await axios.get(`${endpoints.cart}`, { headers: headers });

  localStorage.setItem("cart_id", data.id);

  await addItemsToCart(data.id, body);
};

const addItemsToCart = async (cartId, body) => {
  const { data } = await axios.post(`${endpoints.cart}/${cartId}`, body, {
    headers: headers,
  });

  console.log(data.cart);
};
