import { createAsyncThunk } from "@reduxjs/toolkit";
import { ChartService } from "../../services/chart.service";
import { transformDataForChart } from "../../utils/transformData";

export const getChartData = createAsyncThunk(
  "chart/getChartData",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await ChartService.getChartData();

      //   console.log(data);

      const result = transformDataForChart(data.data);

      //   console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
