import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./slices/userSlice";

const store = configureStore({
  reducer: { user: reducer },
});

export default store;
