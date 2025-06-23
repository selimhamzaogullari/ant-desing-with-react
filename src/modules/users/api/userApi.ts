import { mockUsers } from "../../../api/mockData";
// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getUsers = async () => {
  await delay(1000);

  return {
    data: mockUsers,
    message: "Ok",
    statusCode: 200,
  };
};
