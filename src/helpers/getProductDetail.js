import axios from "axios";
import { endpoints, headersPublic } from "../endpoints";

export const getProductDetail = async (productId) => {
  try {
    const response = await axios.get(`${endpoints.products}/${productId}`, {
      headers: headersPublic,
    });
  } catch (error) {
    alert(error.message);
  }
};
