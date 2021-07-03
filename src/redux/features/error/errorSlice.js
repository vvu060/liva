import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isError: false,
};

export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    isError: (state, action) => {
      state.isError = action.payload;
    },
  },
});

export const { isError } = errorSlice.actions;

export const selectIsError = (state) => state.error.isError;

export default errorSlice.reducer;
