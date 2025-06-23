import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../modules/products/store/productSlice";
import userReducer from "../modules/users/store/userSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    users: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
