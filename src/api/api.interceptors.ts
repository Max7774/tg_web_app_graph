import axios from "axios";
import { getContentType } from "./api.helpers";

const axiosOptions = {
  baseURL: "/api/v1",
  headers: getContentType(),
};

export const defaultAxios = axios.create(axiosOptions);
export const axiosWithAuth = axios.create(axiosOptions);

axiosWithAuth.interceptors.request.use((config) => {
  const accessToken = "";

  if (config && config.headers && accessToken)
    config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

axiosWithAuth.interceptors.response.use(
  (config) => config,
  async (error) => {
    throw error;
  }
);
