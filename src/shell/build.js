import path from 'path';
import fs from 'fs';

import { defineConfig, build } from 'vite';
// import { visualizer } from 'rollup-plugin-visualizer';

const __dirname = path.resolve();
const entryDir = path.resolve(__dirname, './src/components');
const entryDirAll = path.resolve(__dirname, './src/index.js');

// ESM/CJS 全量构建方法
const buildAll = async () => {
  const config = defineConfig({
    publicDir: false,
    build: {
      lib: {
        entry: entryDirAll,
        name: 'index',
        fileName: 'index',
      }, // 库编译模式配置
      rollupOptions: {
        external: ['qs', 'vue'],
        output: [
          {
            dir: 'dist',
            format: 'es',
            name: 'index',
            exports: 'named',
            entryFileNames: 'index.js',
            minifyInternalExports: false,
          },
          {
            dir: 'dist',
            format: 'cjs',
            name: 'index',
            exports: 'named',
            entryFileNames: 'index.cjs',
          },
        ],
      },
    },
  });
  await build(config);
};

// ESM/CJS 单一构建方法
const buildSingle = async (name, entry) => {
  const config = defineConfig({
    // plugins: [
    //   visualizer({
    //     gzipSize: true,
    //     brotliSize: true,
    //     emitFile: false,
    //     filename: `${name}-visual.html`, // 分析图生成的文件名
    //     open: false, // 如果存在本地服务端口，将在打包后自动展示
    //   }),
    // ],
    publicDir: false,
    build: {
      lib: {
        entry,
        name,
        fileName: 'index',
        formats: ['es', 'cjs'],
      }, // 库编译模式配置
      rollupOptions: {
        external: ['qs', 'vue', '../p5-canvas'],
        output: [
          {
            dir: `es/${name}`,
            format: 'es',
            name: 'index',
            exports: 'named',
            entryFileNames: 'index.js',
            minifyInternalExports: false,
          },
          {
            dir: `lib/${name}`,
            format: 'cjs',
            name: 'index',
            exports: 'named',
            entryFileNames: 'index.cjs',
          },
        ],
      },
    },
  });
  await build(config);
};

fs.readdirSync(entryDir).map((name) => {
  const componentDir = path.resolve(entryDir, name); // 组件目录
  const isDir = fs.lstatSync(componentDir).isDirectory();
  if (isDir) {
    buildSingle(name, path.resolve(componentDir, './index.ts'));
  }
});

buildAll();
