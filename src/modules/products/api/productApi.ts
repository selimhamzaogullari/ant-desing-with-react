import { mockProducts } from "../../../api/mockData";
// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getProducts = async () => {
  await delay(1000);

  return {
    data: mockProducts,
    message: "Ok",
    statusCode: 200,
  };
};
