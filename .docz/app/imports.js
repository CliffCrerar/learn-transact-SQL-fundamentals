export const imports = {
  'pages/new.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "pages-new" */ 'pages/new.mdx'
    ),
}
