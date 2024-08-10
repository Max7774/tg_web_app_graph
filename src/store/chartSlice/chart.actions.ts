import { createAsyncThunk } from "@reduxjs/toolkit";
import { ChartService } from "../../services/chart.service";

export const getChartData = createAsyncThunk(
  "chart/getChartData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await ChartService.getChartData();
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
