import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Chỉ định nơi chứa file build, mặc định là dist
    outDir: "dist",
    // Quan trọng: Gom tất cả js/css vào thư mục 'static' bên trong dist
    // để tương thích với cách quản lý của Django
    assetsDir: "static",
  },
});
