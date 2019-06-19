export const imports = {
  'src/About.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-about" */ 'src/About.mdx'
    ),
  'src/Introduction.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-introduction" */ 'src/Introduction.mdx'
    ),
}
