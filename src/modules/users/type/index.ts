export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar: string;
}

export interface UserInitialState {
  users: User[] | [];
  loading: boolean;
  error: null | string;
}
