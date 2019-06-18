export const imports = {
  'src/index.md': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-index" */ 'src/index.md'
    ),
  'src/page2.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-page2" */ 'src/page2.mdx'
    ),
}
