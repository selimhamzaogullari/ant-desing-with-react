import { mockUsers } from "../../../api/mockData";
import type { User } from "../type";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

class UserService {
  private users: User[] = [...mockUsers];

  async getUsers() {
    await delay(500);

    return {
      data: [...this.users],
      message: "Ok",
      statusCode: 200,
    };
  }
  async getUserById(id: string) {
    await delay(250);
    const user = this.users.find((p) => p.id === id);
    if (!user) throw new Error("User not found");

    return {
      data: user,
      message: "Ok",
      statusCode: 200,
    };
  }

  async removeUser(id: string) {
    await delay(200);
    const index = this.users.findIndex((p) => p.id === id);
    if (index === -1) throw new Error("User not found");
    this.users.splice(index, 1);
    return {
      data: undefined,
      message: "Ok",
      statusCode: 200,
    };
  }
}

export const userApi = new UserService();
