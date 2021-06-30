import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   sidebar: "",
// };

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: { sidebar: false },
  reducers: {
    openSidebar: (state, action) => {
      state.sidebar = action.payload.sidebar;
    },
    closeSidebar: (state, action) => {
      state.sidebar = action.payload.sidebar;
    },
  },
});

export const { openSidebar, closeSidebar } = sidebarSlice.actions;

export const selectSidebar = (state) => state.sidebar.sidebar;

export default sidebarSlice.reducer;
