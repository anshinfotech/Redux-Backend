import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../Reducer/userReducer";

const mystore = new configureStore({
  reducer: {
    userinfo: userReducer,
  },
});

export default mystore;
