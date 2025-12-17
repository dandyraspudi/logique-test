import axios from "axios";
import type { Product } from "../types/product";

const API_URL = "https://api.escuelajs.co/api/v1";

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await axios.get(`${API_URL}/products`);
  return res.data;
};

export const fetchProductById = async (id: string): Promise<Product> => {
  const res = await axios.get(`${API_URL}/products/${id}`);
  return res.data;
};
