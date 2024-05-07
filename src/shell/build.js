import { defineConfig, build } from 'vite'
// import { glslify } from 'vite-plugin-glslify'
// import vue from '@vitejs/plugin-vue'
import path from "path";

const __dirname = path.resolve();

// const baseConfig = defineConfig({
//   plugins: [
//     vue(),
//     glslify()
//   ],
// });

// rollup打包配置
const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
        vue: "Vue",
    },
  },
};

// 全量构建
const buildAll = async () => {
  await build(defineConfig({
    build: {
      outDir: "lib", // 输出文件名称
      lib: {
        entry: path.resolve(__dirname, "./src/index.ts"), // 指定组件编译入口文件
        name: "ArtifactCanvas",
        fileName: "index",
      }, // 库编译模式配置
      ...rollupOptions,
    },
  }));
};

// 单一构建
// const buildSingle = async (name: string) => {
//   await build(defineConfig({
//     ...baseConfig,
//     build: {
//       outDir: "dist", // 输出文件名称
//       lib: {
//         entry: entryDir, // 指定组件编译入口文件
//         name: "ArtifactCanvas",
//         fileName: "index",
//       }, // 库编译模式配置
//       ...rollupOptions,
//     },
//   }));
// };


const start2Build = () => {
  buildAll();
};

start2Build();
