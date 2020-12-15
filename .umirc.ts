import { defineConfig } from 'dumi';

let BaseUrl = ''
export default defineConfig({
  // title: 'rui_dumi',
  // favicon: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  // logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  // outputPath: 'docs-dist',
  // more config: https://d.umijs.org/config
  mode: 'site', // site: 站点模式（导航头 + 左侧菜单 + 右侧内容）。 doc：文档
  title: 'Saya Rui', // 组件库名称
  favicon: BaseUrl + '/imgs/favicon.ico', 
  logo: BaseUrl + '/imgs/favicon.ico',
  // outputPath: 'docs-dist',
  description: '用于Saya Library Web Dev 前端组件开发',
});
