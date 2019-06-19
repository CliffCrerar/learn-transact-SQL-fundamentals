// import { myCoolPlugin } from 'docz-plugin-mycoolplugin'
import remarkAttr from 'remark-attr';
import remarkAlign from 'remark-align';
import path from 'path';

const PUBLIC = path.resolve(__dirname, 'public');
const SRC = path.resolve(__dirname, 'src');
const remark = require('remark');
const emoji = require('remark-emoji');

export default {
  base: "/",
  indexHtml: './html',
  menu:  [
    ["Introduction",["About"]]
  ],
  public: '/public',
  title: 'Learn TSQL fundamentals',
  description: 'Learn the fundamental principles of relational databases using Transact SQL in Microsoft SQL Express',
  //theme: 'my-coolest-theme',
  themeConfig: {
    colors: {
      primary: 'tomato',
      secondary: 'khaki',
      gray: 'lightslategray',
    },
  },
  modifyBundlerConfig: config => {
    /* do your magic here */
  },
  plugins: [
    // myCoolPlugin()
  ],
  files: '**/*.{markdown,mdx}',
  dest: '/dist',
  htmlContext: {
    favicon: '/public/images/favicon.png',
  },
  ignore: ['site-map.md', 'readme.md', 'src/theme/**'],
  mdPlugins: [images, emoji,remarkAttr,remarkAlign],
}