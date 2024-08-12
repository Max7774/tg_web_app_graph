import { defaultAxios } from "../api/api.interceptors";

export const ChartService = {
  async getChartData() {
    return await defaultAxios({
      url: "/getListItems",
      params: {
        api_token: import.meta.env.VITE_API_TOKEN,
        schema_id: import.meta.env.VITE_SCHEMA_ID,
        "filters[tg_id]": window.Telegram.WebApp.initDataUnsafe.user?.id || 222,
      },
      method: "GET",
    });
  },
};
