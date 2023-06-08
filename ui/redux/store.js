import { configureStore } from "@reduxjs/toolkit";
import { authReducer, messageReducer } from "./reducer";

const Store = configureStore({
  reducer: {
    auth: authReducer,
    message: messageReducer,
  },
});

export default Store;
