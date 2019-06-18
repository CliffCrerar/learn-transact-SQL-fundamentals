import { myCoolPlugin } from 'docz-plugin-mycoolplugin'

export default {
  title: 'My Cool Project',
  description: 'This is my awesome documentation',
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
    myCoolPlugin()
  ]
}