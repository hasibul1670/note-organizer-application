import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface ICart {
  course: any[];
  total: number;
}

const initialCartState: ICart = {
  course: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      const existing = state.course.find(
        (product) => product.id === action.payload.id
      );

      if (existing) {
        existing.quantity = existing.quantity! + 1;
      } else {
        state.course.push({ ...action.payload, quantity: 1 });
      }

      state.total += action.payload.price;

    },
    removeOne: (state, action: PayloadAction<any>) => {
      const existing = state.course.find(
        (product) => product.id === action.payload.id
      );

      if (existing && existing.quantity! > 1) {
        existing.quantity = existing.quantity! - 1;
      } else {
        state.course = state.course.filter(
          (product) => product.id !== action.payload.id
        );
      }

      state.total -= action.payload.price;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeFromCart: (state, action: PayloadAction<any>) => {
      state.course = state.course.filter(
        (product) => product.id !== action.payload.id
      );

      state.total -= action.payload.price * action.payload.quantity!;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addToCart, removeFromCart, removeOne } = cartSlice.actions;

export default cartSlice.reducer;
