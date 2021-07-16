import axios from "axios";
import { endpoints, headersPublic } from "../endpoints";

/**
 * Function to generate commerce JS checkout token.
 * @function generateCheckoutToken
 * @param {cartId} - takes cartId as parameter.
 * @returns {} generates a checkout token.
 */
export const generateCheckoutToken = async (cartId) => {
  try {
    const { data } = await axios.get(
      `${endpoints.checkout}/${cartId}?type=cart`,
      {
        headers: headersPublic,
      }
    );

    localStorage.setItem("checkoutTokenId", data.id);
  } catch (error) {
    alert(error.message);
  }
};
