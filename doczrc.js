import { myCoolPlugin } from 'docz-plugin-mycoolplugin'

export default {
  menu:  [
    ["Introduction",["About"]]
],
  public: '/public',
  title: 'Learn TSQL fundamentals',
  description: 'Learn the fundamental principles of relational databases using Transact SQL in Microsoft SQL Express',
  theme: 'my-coolest-theme',
  themeConfig: {
    colors: {
      primary: 'tomato',
    },
  },
  modifyBundlerConfig: config => {
    /* do your magic here */
  },
  plugins: [
    // myCoolPlugin()
  ],
  files: '**/*.{markdown,mdx}'
}