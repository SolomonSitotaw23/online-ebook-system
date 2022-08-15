import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const initialState = {
  user: {},
  isLoggedIn: false,
};

export const userLogin = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
    login: (state, action) => {
      window.localStorage.setItem("token", action.payload.token);
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      window.localStorage.removeItem("token");
      state.user = {};
      state.isLoggedIn = false;
      storage.removeItem("persist:root");
    },
  },
});

export const { login, logout } = userLogin.actions;

export default userLogin.reducer;
