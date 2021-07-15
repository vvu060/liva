import { endpoints, headersPublic } from "../endpoints";
import axios from "axios";

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
