import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../api/userApi";
import type { UserInitialState } from "../type";

const initialState: UserInitialState = {
  users: [],
  loading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk("api/fetchUsers", async () => {
  const response = await getUsers();
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
      });
  },
});

export default userSlice.reducer;
