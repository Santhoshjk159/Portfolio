import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Ensures your build output is in the 'dist' folder
  },
  server: {
    port: 3000,
  },
});
