// import legacy from "@vitejs/plugin-legacy";
// import babel from "vite-plugin-babel";
import { glslify } from "vite-plugin-glslify";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import vue from "@vitejs/plugin-vue";
import { buildPlugin } from "../plugins/indexInitPlugin";

export const baseConfig = {
  plugins: [
    vue(),
    // babel(),
    glslify(),
    libInjectCss(),
    buildPlugin(),
    // legacy({
    //   targets: ["defaults", "not IE 11"],
    // }),
  ],
  // 这里相当于可以直接构建预览页面了
  build: {
    outDir: "dist", // 输出文件名称
    modulePreload: {
      polyfill: true,
    },
  },
};
