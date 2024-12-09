// 一个生成组件库目录的插件
export function bucketInitialPlugin() {
  // console.log(options);
  return {
    name: "vite-plugin-bucketInitial",
    // config(config: any, { command }: any) {
    //   // console.log(config, command);
    // },
    // load() {},
    // 通用钩子
    buildStart() {
      console.log('buildStart');
    },
    // 通用钩子
    buildEnd() {
      console.log('buildEnd');
    },
    // 通用钩子
    closeBundle() {
      console.log('closeBundle');
    },
  };
}
