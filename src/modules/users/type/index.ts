export interface CreateUser {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar: string;
}

export interface User extends CreateUser {
  id: string;
}

export interface UserInitialState {
  users: User[] | [];
  activeUser: User | null;
  loading: boolean;
  error: null | string;
}
