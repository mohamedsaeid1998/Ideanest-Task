import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux"
import login from "./slices/Auth/LoginSlice";
const store = configureStore({
  reducer: {
    login
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;