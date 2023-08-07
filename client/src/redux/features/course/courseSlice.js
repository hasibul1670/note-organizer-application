
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  status: false,
  priceRange: 400,
  statusCode: null,
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    toggleState: (state) => {
      state.status = !state.status;
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
  },
});

export const { toggleState, setPriceRange } = courseSlice.actions;

export default courseSlice.reducer;
