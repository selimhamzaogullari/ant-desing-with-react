import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserById, getUsers } from "../api/userApi";
import type { UserInitialState } from "../type";

const initialState: UserInitialState = {
  users: [],
  activeUser: null,
  loading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk("api/fetchUsers", async () => {
  const response = await getUsers();
  return response.data;
});

export const fetchUserById = createAsyncThunk("api/fetchUserById", async (id: string) => {
  const response = await getUserById(id);
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
      });
  },
});

export default userSlice.reducer;
