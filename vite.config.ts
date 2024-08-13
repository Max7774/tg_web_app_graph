import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default () => {
  const env = loadEnv("all", process.cwd());
  return defineConfig({
    plugins: [react()],
    build: {
      outDir: "build",
    },
    server: {
      port: 3000,
      proxy: {
        "/api/v1": {
          target: env.VITE_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/v1/, ""),
        },
      },
    },
  });
};
