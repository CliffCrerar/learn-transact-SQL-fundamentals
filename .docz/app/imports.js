export const imports = {
  'src/pages/1-Landing.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-1-landing" */ 'src/pages/1-Landing.mdx'
    ),
  'src/pages/2-Introduction.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-2-introduction" */ 'src/pages/2-Introduction.mdx'
    ),
  'src/pages/3-About.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-3-about" */ 'src/pages/3-About.mdx'
    ),
  'src/pages/4-Start.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-4-start" */ 'src/pages/4-Start.mdx'
    ),
  'src/pages/Context.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-context" */ 'src/pages/Context.mdx'
    ),
  'src/pages/Database.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-database" */ 'src/pages/Database.mdx'
    ),
  'src/pages/Demo.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-demo" */ 'src/pages/Demo.mdx'
    ),
  'src/pages/Types.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-types" */ 'src/pages/Types.mdx'
    ),
  'src/pages/dql.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-dql" */ 'src/pages/dql.mdx'
    ),
}
