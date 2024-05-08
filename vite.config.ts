import { defineConfig } from 'vite'
import { glslify } from 'vite-plugin-glslify'
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import vue from '@vitejs/plugin-vue'
import path from "path";

export default defineConfig({
  plugins: [
    vue(),
    glslify(),
    libInjectCss(),
  ],
  build: {
    outDir: "dist", // 输出文件名称
    lib: {
      entry: path.resolve(__dirname, "./src/index.ts"), // 指定组件编译入口文件
      name: "index",
      fileName: "index",
    }, //库编译模式配置
    rollupOptions: {
      external: ["vue", "vue-router"],
      output: {
        globals: {
            vue: "Vue",
        },
      },
    }, // rollup打包配置
  },
})
