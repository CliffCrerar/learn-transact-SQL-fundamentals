//import { myCoolPlugin } from 'docz-plugin-mycoolplugin'
import remarkAttr from 'remark-attr';
import remarkAlign from 'remark-align';
import path from 'path';
// import defaultTheme from 'docz-theme-default'

const PUBLIC = path.resolve(__dirname, 'public');
const SRC = path.resolve(__dirname, 'src');
// const remark = require('remark');
const emoji = require('remark-emoji');
import images from 'remark-images';

console.log(process.cwd());
const themeConfig = {
    colors: {
        primary: 'tomato',
        secondary: 'khaki',
        gray: 'lightslategray',
    },
    logo: {
        src: 'https://now-static-cdn.c1i44.now.sh/svg/docz.logo.svg',
        width: 150,
    }
};

//theme: 'docz-theme-default',
// themeConfig: {
//         // mode: 'dark',
//         colors: {
//             primary: 'tomato'
//         },
//         logo: {
//             src: 'https://now-static-cdn.c1i44.now.sh/svg/docz.logo.svg',
//             width: 150,
//         }
//     },

const config = {
    base: "/",
    indexHtml: './public/index.html',
    menu: require('./menu'),
    public: '/public',
    title: 'RDBMS Fundamentals',
    description: 'Learn the fundamental principles of relational databases using Transact SQL in Microsoft SQL Express',
    htmlContext: {
        head: {
            links: [{
                rel: 'stylesheet',
                href: 'https://codemirror.net/theme/dracula.css',
            }, ],
        },
    },
    // theme: defaultTheme,

    //modifyBundlerConfig: config => {
    /* do your magic here */
    //},
    // plugins: [
    //   myCoolPlugin()
    // ],
    files: './src/**/*.{markdown,mdx}',
    dest: '/dist',
    // htmlContext: {
    //favicon: '/public/images/favicon.png',
    // },
    ignore: ['site-map.md', 'readme.md', 'src/theme/**'],
    mdPlugins: [emoji, images, remarkAttr, remarkAlign]
}

config.themeConfig = themeConfig;

export default config;

export { themeConfig }