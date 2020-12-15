import { defineConfig } from 'dumi';

let BaseUrl = '/rui_dumi'
export default defineConfig({
  // title: 'rui_dumi',
  // favicon: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  // logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  // outputPath: 'docs-dist',
  // more config: https://d.umijs.org/config
  // outputPath: 'docs-dist',



  // 网站描述配置
  mode: 'site', // site: 站点模式（导航头 + 左侧菜单 + 右侧内容）。 doc：文档
  title: 'rui_dumi', // 组件库名称
  favicon: BaseUrl + '/imgs/favicon.ico', 
  logo: BaseUrl + '/imgs/favicon.ico',
  description: '用于rui_dumi Web Dev 前端组件开发',
  // 打包路径配置
  base: '/rui_dumi',
  publicPath: '/rui_dumi/', // 打包文件时，引入地址生成 publicPath/xxx.js
  outputPath: 'docs-dist',
  exportStatic: {}, // 对每隔路由输出html
  dynamicImport: {}, // 动态导入

  hash: true, //加hash配置，清除缓存
  manifest: {
    // 内部发布系统规定必须配置
    fileName: 'manifest.json',
  },

  // 多国语顺序
  locales: [
    ['en-US', 'English'],
    ['zh-CN', '中文'],
  ],

  // 主题
  theme: {
    '@c-primary': '#16c35f',
  },
  // alias: {
  //   'biz-web-library/es': '*/src',
  // },
});
