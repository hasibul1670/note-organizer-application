
import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";

import productSlice from "./product/productSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
