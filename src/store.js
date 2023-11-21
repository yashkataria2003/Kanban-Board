import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from './reducer/dataSlice';
import { dataSelectSlice } from "./reducer/selectDataSlice";

export const store = configureStore({
  reducer: {
    dataSlice,
    dataSelectSlice,
  },
});
