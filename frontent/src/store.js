import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice.js";

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

export default store;
