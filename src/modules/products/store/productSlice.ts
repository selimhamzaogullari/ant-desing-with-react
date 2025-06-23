import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../api/productApi";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk("api/fetchProducts", async (itemId: string) => {
  const item = await getProducts();
  return item;
});

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
  },
});

export default productSlice.reducer;
