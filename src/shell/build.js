import { defineConfig, build } from "vite";
import path from "path";
import fs from "fs";

const __dirname = path.resolve();
const entryDir = path.resolve(__dirname, "./src/components");

// rollup打包配置
const rollupOptions = {
  external: ["vue", "vue-router", /node_modules/],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

// 单一构建
const buildSingle = async (name, entry) => {
  await build(
    defineConfig({
      build: {
        outDir: `dist/${name}`,
        lib: {
          entry,
          name,
          fileName: "index",
        }, // 库编译模式配置
        exclude: ["src/public"], // 排除不需要打包的文件
        ...rollupOptions,
      },
    })
  );
};

fs.readdirSync(entryDir).map((name) => {
  const componentDir = path.resolve(entryDir, name); // 组件目录
  const isDir = fs.lstatSync(componentDir).isDirectory();
  if (isDir) {
    buildSingle(name, path.resolve(componentDir, "./index.ts"));
  }
});
