//import { myCoolPlugin } from 'docz-plugin-mycoolplugin'
import remarkAttr from 'remark-attr';
import remarkAlign from 'remark-align';
import path from 'path';
const CopyPlugin = require('copy-webpack-plugin');
// import defaultTheme from 'docz-theme-default'

const PUBLIC = path.resolve(__dirname, 'public');
const SRC = path.resolve(__dirname, 'src');
const emoji = require('remark-emoji');
import images from 'remark-images';

console.log(process.cwd());

const themeConfig = {
    colors: {
        primary: 'tomato',
        secondary: 'khaki',
        gray: 'lightslategray'
    }
    // logo: {
    //     src: 'https://cdn-learnsql.c1i44.now.sh/pg1/_pg1-compass.png',
    //     width: 160
    //         // https://storage.googleapis.com/cdnbucket2/files/icons-social-fa-svq-sq/facebook.svg
    // }
};

const config = {
    base: "/",
    indexHtml: 'public/index.html',
    menu: require('./menu'),
    public: '/public',
    title: 'RDBMS Fundamentals',
    description: 'Learn the fundamental principles of relational databases using Transact SQL in Microsoft SQL Express',
    indexHtml: './public/index.html',
    htmlContext: {
        favicon: '/public/images/favicon.png',
        head: {
            links: [{
                rel: 'stylesheet',
                href: 'https://codemirror.net/theme/dracula.css'
            }]
        }
    },
    themeConfig,
    // theme: defaultTheme,
    modifyBundlerConfig: config => {
        console.log('config: ', config.plugins.push);
        /* do your magic here */
        const copyPlugin = new CopyPlugin([{
                from: path.resolve(process.cwd(), 'public/QYHcroLbMJapKtlHCGovXoZeFtQPfI.html'),
                to: path.resolve(process.cwd(), 'dist/QYHcroLbMJapKtlHCGovXoZeFtQPfI.html')
            }
            // { from: 'other', to: 'public' },
        ])
        config.plugins.push(copyPlugin);
        // require('./src/copyfile');
        return config;
    },
    // plugins: [
    //   myCoolPlugin()
    // ],
    files: './src/**/*.{markdown,mdx}',
    dest: '/dist',
    ignore: ['site-map.md', 'readme.md', 'src/theme/**'],
    mdPlugins: [emoji, images]
}

export default config;

export { themeConfig }