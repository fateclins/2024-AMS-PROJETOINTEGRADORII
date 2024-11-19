import axios from "axios";

import { env } from "@/env";

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: false,
});

if (env.VITE_ENABLE_API_DELAY) {
  api.interceptors.request.use(async (config) => {
    await new Promise((resolve) => {
      const delayTime = Math.floor(Math.random() * (5000 - 1000));
      setTimeout(resolve, delayTime);
    });

    return config;
  });
}
