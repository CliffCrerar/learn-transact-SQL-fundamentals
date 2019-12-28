//import { myCoolPlugin } from 'docz-plugin-mycoolplugin'
const path= require('path');
// const  CopyPlugin =  require('copy-webpack-plugin');
const defaultTheme = require( 'docz-theme-default');
const images = require('remark-images');
const PUBLIC = path.resolve(__dirname, 'public');
const SRC = path.resolve(__dirname, 'src');
const emoji = require('remark-emoji');
console.log(process.cwd());
// console.log(defaultTheme);
const themeConfig = {
    // mode: 'dark',
    colors: {
        primary: 'dodgerBlue',
        secondary: 'red',
        gray: 'white'
    }
};

const config = {
    base: "/",
    indexHtml: path.join(PUBLIC, 'index.html'),
    menu: require('./menu'),
    public: PUBLIC,
    title: 'RDBMS Fundamentals',
    description: 'Learn the fundamental principles of relational databases using Transact SQL in Microsoft SQL Express',
    // indexHtml: path.join(PUBLIC, 'index.html'),
    htmlContext: {
        favicon: path.join(PUBLIC, 'favicon.png'),
        head: {
            links: [{
                rel: 'stylesheet',
                href: 'https://codemirror.net/theme/dracula.css'
            }]
        }
    },
    themeConfig,
    theme: defaultTheme,
    // modifyBundlerConfig: config => {
    //     /* do your magic here */
    //     const ownerShipFnPath = path.resolve(process.cwd(), 'public/ownership');
    //     const ownerShipFn = require('fs').readdirSync(ownerShipFnPath)[0];
    //     [0];
    //     const copyPlugin = new CopyPlugin([{
    //             from: path.resolve(process.cwd(), ownerShipFnPath, ownerShipFn),
    //             to: path.resolve(process.cwd(), 'dist', ownerShipFn)
    //         },
    //         {
    //             from: path.resolve(process.cwd(), 'public/sitemap.xml'),
    //             to: path.resolve(process.cwd(), 'dist/sitemap.xml')
    //         }
    //     ])
    //     config.plugins.push(copyPlugin);
    //     // require('./src/copyfile');
    //     return config;
    // },
    // plugins: [
    // //   myCoolPlugin()
    // ],
    files: './src/**/*.{markdown,mdx}',
    dest: '/dist',
    ignore: ['site-map.md', 'readme.md', 'src/theme/**'],
    mdPlugins: [emoji, images]
}

// export default config;

module.exports = config;