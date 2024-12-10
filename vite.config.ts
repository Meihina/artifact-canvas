// import { resolve } from "path";
import { defineConfig } from "vite";
// import legacy from "@vitejs/plugin-legacy";
// import babel from "vite-plugin-babel";
// import dts from 'vite-plugin-dts';
// import commonjs from 'vite-plugin-commonjs';
import { glslify } from "vite-plugin-glslify";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import vue from "@vitejs/plugin-vue";
// import { bucketInitialPlugin } from "./src/plugins/bucketInitial";

const ENV = process.env.NODE_ENV;

console.log("current ENV is: " + ENV);

export default defineConfig({
  publicDir: false,
  resolve: {
    extensions: [".mjs", ".js", ".mts", ".ts", ".jsx", ".tsx", ".json"],
  },
  plugins: [
    vue(),
    // babel(),
    glslify(),
    libInjectCss(),
    // bucketInitialPlugin(),
    // dts(),
    // legacy({
    //   targets: ["defaults", "not IE 11"],
    // }),
    // commonjs(),
  ],
  // 这里相当于可以直接构建预览页面了
  build: {
    // lib: {
    //   entry: resolve(__dirname, 'src/index.js'),
    //   name: 'index',
    //   formats: ['es', 'cjs'],
    //   fileName: 'index'
    // },
    // rollupOptions: {
    //   external: ["qs", "vue", "vue-router"]
    // },
    outDir: "dist", // 输出文件名称
    modulePreload: {
      polyfill: true,
    },
  },
});
