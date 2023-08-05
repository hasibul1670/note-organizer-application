import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";

import cartReducer from "./features/cart/cartSlice";
import WishListReducer from "./features/wishList/wishListSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: WishListReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
