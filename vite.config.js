import { resolve } from "path";

export default {
  base: "./",
  root: resolve(__dirname, "src"),
  build: {
    outDir: "../public",
  },
  server: {
    port: 8080,
  },
};
