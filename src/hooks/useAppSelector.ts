import type { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import type { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";
import store, { TypeRootState } from "../store/store";

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  TypeRootState,
  unknown,
  AnyAction
>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
