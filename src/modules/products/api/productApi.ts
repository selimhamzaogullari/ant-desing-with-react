import { mockProducts } from "../../../api/mockData";
import type { ProductFilters } from "../types";
// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getProducts = async (filters?: ProductFilters) => {
  await delay(1000);

  let filteredProducts = [...mockProducts];

  if (filters && Object.keys(filters).length !== 0) {
    if (filters.search) {
      filteredProducts = filteredProducts.filter((product) => product.name.toLowerCase().includes(filters.search?.toLowerCase()));
    }
    if (filters.category) {
      filteredProducts = filteredProducts.filter((product) => product.category === filters.category);
    }
  }

  return {
    data: filteredProducts,
    message: "Ok",
    statusCode: 200,
  };
};
