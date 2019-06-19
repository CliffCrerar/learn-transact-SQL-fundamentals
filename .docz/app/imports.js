export const imports = {
  'src/1-Landing.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-1-landing" */ 'src/1-Landing.mdx'
    ),
  'src/2-About.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-2-about" */ 'src/2-About.mdx'
    ),
}
