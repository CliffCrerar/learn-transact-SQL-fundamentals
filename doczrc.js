//import { myCoolPlugin } from 'docz-plugin-mycoolplugin'

export default {
  title: 'My Cool Project',
  description: 'This is my awesome documentation',
  theme: 'my-coolest-theme',
  themeConfig: {
    mode: 'dark',
  },
  modifyBundlerConfig: config => {
    /* do your magic here */
  },
  plugins: [],
  export default {
  dest: '/dist'
    }
}