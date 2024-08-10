import { defaultAxios } from "../api/api.interceptors";

export const ChartService = {
  async getChartData() {
    return await defaultAxios({
      url: "/chart",
      method: "GET",
    });
  },
};
