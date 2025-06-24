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
      // Products
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = [];
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error.message || "Error");
      });
  },
});

export default productSlice.reducer;
