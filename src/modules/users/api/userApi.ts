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

export const getUserById = async (id: string) => {
  await delay(250);
  const user = mockUsers.find((p) => p.id === id);
  if (!user) {
    throw new Error("Product not found");
  }
  return {
    data: user,
    message: "Ok",
    statusCode: 200,
  };
};

export const removeUser = async (id: string) => {
  await delay(200);
  const index = mockUsers.findIndex((p) => p.id === id);
  if (index < 0) {
    throw new Error("User not found");
  }
  mockUsers.splice(index, 1);
  return {
    data: undefined,
    message: "Ok",
    statusCode: 200,
  };
};
