import { defaultAxios } from "../api/api.interceptors";

export const ChartService = {
  async getChartData() {
    return await defaultAxios({
      url: `&filters[tg_id]=${window.Telegram.WebApp.initDataUnsafe.user.id}`,
      method: "GET",
    });
  },
};
