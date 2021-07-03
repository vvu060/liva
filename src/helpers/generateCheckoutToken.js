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
    console.log(data);
    localStorage.setItem("checkoutTokenId", data.id);
    console.log(data);
  } catch (error) {
    alert(error.message);
  }
};
