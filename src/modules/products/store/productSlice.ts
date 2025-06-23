import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../api/productApi";
import type { ProductInitialState } from "../types";

const initialState: ProductInitialState = {
  products: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk("api/fetchProducts", async () => {
  const response = await getProducts();
  return response.data;
});

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      });
  },
});

export default productSlice.reducer;
