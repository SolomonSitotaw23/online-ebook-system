import { configureStore } from "@reduxjs/toolkit";
import userLoginReducer from "./login";
import cartReducer from "./cart";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import logger from "redux-logger";
const persistConfig = {
  key: "root",
  storage,
};

const persistedCartReducer = persistReducer(persistConfig, cartReducer);
const persistedUserLoginReducer = persistReducer(
  persistConfig,
  userLoginReducer
);

export const store = configureStore({
  reducer: {
    loginOrLogout: persistedUserLoginReducer,
    cart: persistedCartReducer,
    middleware: [thunk, logger],
  },
});

export const persistor = persistStore(store);
