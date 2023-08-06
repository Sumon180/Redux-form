// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./features/colorSlice";
import formReducer from "./features/formSlice";

const store = configureStore({
  reducer: {
    color: colorReducer,
    form: formReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
