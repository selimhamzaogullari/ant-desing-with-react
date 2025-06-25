import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { CreateUser, UserInitialState } from "../type";
import { userApi } from "../api/userApi";

const initialState: UserInitialState = {
  users: [],
  activeUser: null,
  loading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk("api/fetchUsers", async () => {
  const response = await userApi.getUsers();
  return response.data;
});

export const fetchUserById = createAsyncThunk("api/fetchUserById", async (id: string) => {
  const response = await userApi.getUserById(id);
  return response.data;
});

export const deleteUser = createAsyncThunk("api/deleteUser", async (id: string) => {
  const response = await userApi.removeUser(id);
  return response.data;
});

export const createUser = createAsyncThunk("api/createUser", async (newUser: CreateUser) => {
  const response = await userApi.addUser(newUser);
  return response.data;
});

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error.message || "Error");
      })
      // User Detail
      .addCase(fetchUserById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.activeUser = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error.message || "Error");
      })
      // Delete User
      .addCase(deleteUser.pending, (state) => {
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error.message || "Error");
      })
      // Create User
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(createUser.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error.message || "Error");
      });
  },
});

export default userSlice.reducer;
