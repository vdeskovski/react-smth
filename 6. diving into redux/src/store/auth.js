import { configureStore, createSlice } from "@reduxjs/toolkit";
const intitialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "auth",
  initialState: intitialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice;
