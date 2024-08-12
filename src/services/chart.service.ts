import { defaultAxios } from "../api/api.interceptors";

export const ChartService = {
  async getChartData() {
    return await defaultAxios({
      params: {
        api_token: import.meta.env.VITE_API_TOKEN,
        schema_id: import.meta.env.VITE_SCHEMA_ID,
        "filters[tg_id]": window.Telegram.WebApp.initDataUnsafe.user.id,
        withCredentials: false,
      },
      method: "GET",
    });
  },
};
