import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  phone: "",
  firstname: "",
  lastname: "",
  external_id: "",
  photoUrl: "",
  userId: "",
  checUserId: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
      state.external_id = action.payload.external_id;
      state.photoUrl = action.payload.photoUrl;
      state.userId = action.payload.userId;
    },

    logout: (state) => {
      state.email = "";
      state.phone = "";
      state.firstname = "";
      state.lastname = "";
      state.external_id = "";
      state.photoUrl = "";
      state.userId = "";
    },
    loginCommerceJS: (state, action) => {
      state.checUserId = action.payload;
    },
  },
});

export const { login, logout, loginCommerceJS } = userSlice.actions;

export const selectUserEmail = (state) => state.user.email;
export const selectUserPhone = (state) => state.user.phone;
export const selectUserFirstName = (state) => state.user.firstname;
export const selectUserLastName = (state) => state.user.lastname;
export const selectUserPhoto = (state) => state.user.photoUrl;
export const selectUserId = (state) => state.user.userId;
export const selectChecUserId = (state) => state.user.checUserId;

export default userSlice.reducer;
