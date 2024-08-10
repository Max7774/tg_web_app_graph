import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { chartSlice } from "./chartSlice/chart.slice";

const combinedReducers = combineReducers({
  chart: chartSlice.reducer,
});

const mainReducer = combinedReducers;

export const store = configureStore({
  reducer: mainReducer,
});

export type TypeRootState = ReturnType<typeof mainReducer>;

export default store;
