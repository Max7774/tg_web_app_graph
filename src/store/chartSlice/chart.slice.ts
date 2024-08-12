/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { getChartData } from "./chart.actions";

type TChartDataState = {
  isLoading: boolean;
  data: any;
};

const initialState: TChartDataState = {
  isLoading: true,
  data: {},
};

export const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getChartData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getChartData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload as any;
      })
      .addCase(getChartData.rejected, (state) => {
        state.isLoading = false;
        state.data = [];
      });
  },
});
