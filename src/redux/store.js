import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./login";
import cartReducer from "./cart";

export default configureStore({
  reducer: {
    loginOrLogout: loginReducer,
    cart: cartReducer,
  },
});
