import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import authSlice from "./slices/authSlice.js";
import authReducer from "./slices/authSlice.js";
import { apiSlice } from "./slices/apiSlice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
