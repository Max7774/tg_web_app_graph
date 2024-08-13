import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    plugins: [react()],
    build: {
      outDir: "build",
    },
    server: {
      port: 3000,
      proxy: {
        "/api/v1": {
          target: "https://app.leadteh.ru",
          changeOrigin: true,
        },
      },
    },
  });
};
