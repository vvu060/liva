import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    isLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { isLoading } = loadingSlice.actions;

export const selectLoading = (state) => state.loading.isLoading;

export default loadingSlice.reducer;
