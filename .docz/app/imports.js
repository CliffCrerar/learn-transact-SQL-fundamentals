export const imports = {
  'src/pages/1-Landing.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-1-landing" */ 'src/pages/1-Landing.mdx'
    ),
  'src/pages/2-Instroduction.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-2-instroduction" */ 'src/pages/2-Instroduction.mdx'
    ),
  'src/pages/3-About.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-3-about" */ 'src/pages/3-About.mdx'
    ),
  'src/pages/5-Demo.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-5-demo" */ 'src/pages/5-Demo.mdx'
    ),
}
