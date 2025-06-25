import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CreateProduct, ProductFilters, ProductInitialState, Product } from "../types";
import { productApi } from "../api/productApi";

const initialState: ProductInitialState = {
  products: [],
  activeProduct: null,
  favorites: [],
  filters: {},
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk("api/fetchProducts", async (filters?: ProductFilters) => {
  const response = await productApi.getProducts(filters);
  return response.data;
});

export const fetchProductById = createAsyncThunk("api/fetchProductById", async (id: string) => {
  const response = await productApi.getProductById(id);
  return response.data;
});

export const deleteProduct = createAsyncThunk("api/deleteProduct", async (id: string) => {
  const response = await productApi.removeProduct(id);
  return response.data;
});

export const createProduct = createAsyncThunk("api/createProduct", async (newProduct: CreateProduct) => {
  const response = await productApi.addProduct(newProduct);
  return response.data;
});

export const updateProduct = createAsyncThunk("api/updateProduct", async (productData: Product) => {
  const response = await productApi.editProduct(productData);
  return response.data;
});

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<ProductFilters>) => {
      state.filters = action.payload;
    },
    setFavorites: (state, action: PayloadAction<string>) => {
      const index = state.favorites.findIndex((f) => f === action.payload);
      if (index === -1) state.favorites.push(action.payload);
      else state.favorites.splice(index, 1);
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
      })
      // Product Detail
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.activeProduct = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error.message || "Error");
      })
      // Delete Product
      .addCase(deleteProduct.pending, (state) => {
        state.error = null;
      })
      .addCase(deleteProduct.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error.message || "Error");
      })
      // Create Product
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createProduct.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(createProduct.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error.message || "Error");
      })
      // Update Product
      .addCase(updateProduct.pending, (state) => {
        // state.loading = true;
        state.error = null;
      })
      .addCase(updateProduct.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error.message || "Error");
      });
  },
});

export const { setFilters, setFavorites } = productSlice.actions;

export default productSlice.reducer;
