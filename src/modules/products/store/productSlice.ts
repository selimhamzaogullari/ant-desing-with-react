import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getProducts } from "../api/productApi";
import type { ProductFilters, ProductInitialState } from "../types";

const initialState: ProductInitialState = {
  products: [],
  filters: {},
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk("api/fetchProducts", async (filters?: ProductFilters) => {
  const response = await getProducts(filters);
  return response.data;
});

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<ProductFilters>) => {
      state.filters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Products
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error.message || "Error");
      });
  },
});

export const { setFilters } = productSlice.actions;

export default productSlice.reducer;
