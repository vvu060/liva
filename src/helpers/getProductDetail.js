import axios from "axios";
import { endpoints, headersPublic } from "../endpoints";

/**
 * Function to retrieve product detail.
 * @function getProductDetail
 * @param { productId } - takes productId as parameter.
 * @returns {} returns product details.
 */
export const getProductDetail = async (productId) => {
  try {
    const response = await axios.get(`${endpoints.products}/${productId}`, {
      headers: headersPublic,
    });
  } catch (error) {
    alert(error.message);
  }
};
