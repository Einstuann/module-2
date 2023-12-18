import axios from "axios";
import { PRODUCT_HOST_API } from "../constants/api-constants";

// get all product
export const getProducts = async () => {
  const response = await axios.get(PRODUCT_HOST_API);
  return response.data; // => []
};

export const getProductById = async (productId) => {
  const response = await axios.get(`${PRODUCT_HOST_API}/${productId}`);
  return response.data; // => {}
};
