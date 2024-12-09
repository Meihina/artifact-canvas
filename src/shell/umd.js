import path from "path";
import fs from "fs";

import { defineConfig, build } from "vite";

const __dirname = path.resolve();
const entryDir = path.resolve(__dirname, "./src/components");

// UMD 单一构建方法
const buildSingleUMD = async (name, entry) => {
  const config = defineConfig({
    publicDir: false,
    build: {
      lib: {
        entry,
        name,
        formats: ["umd"],
      },
      rollupOptions: {
        external: ["vue"],
        output: {
          dir: `unpkg/${name}`,
          format: "umd",
          name,
          exports: "named",
          entryFileNames: `${name}.umd.js`,
          globals: {
            vue: "Vue",
          },
        },
      },
    },
  });
  await build(config);
};

fs.readdirSync(entryDir).map((name) => {
  const componentDir = path.resolve(entryDir, name); // 组件目录
  const isDir = fs.lstatSync(componentDir).isDirectory();
  if (isDir) {
    buildSingleUMD(name, path.resolve(componentDir, "./index.ts"));
  }
});
