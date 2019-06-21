export const imports = {
  'src/pages/001-landing/landing.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-001-landing-landing" */ 'src/pages/001-landing/landing.mdx'
    ),
  'src/pages/002-intro/introduction.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-002-intro-introduction" */ 'src/pages/002-intro/introduction.mdx'
    ),
  'src/pages/004-start/getting-started.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-004-start-getting-started" */ 'src/pages/004-start/getting-started.mdx'
    ),
  'src/pages/003-about/about-this-page.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-003-about-about-this-page" */ 'src/pages/003-about/about-this-page.mdx'
    ),
  'src/pages/005-concepts/concepts-and-semantics.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-005-concepts-concepts-and-semantics" */ 'src/pages/005-concepts/concepts-and-semantics.mdx'
    ),
  'src/pages/008-dql/data-query-language.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-008-dql-data-query-language" */ 'src/pages/008-dql/data-query-language.mdx'
    ),
  'src/pages/007-types/data-types.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-007-types-data-types" */ 'src/pages/007-types/data-types.mdx'
    ),
  'src/pages/009-dml/data-manipulation-language.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-009-dml-data-manipulation-language" */ 'src/pages/009-dml/data-manipulation-language.mdx'
    ),
  'src/pages/010-logical-ops/logical-operators.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-010-logical-ops-logical-operators" */ 'src/pages/010-logical-ops/logical-operators.mdx'
    ),
  'src/pages/z_Resources/resources.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-z-resources-resources" */ 'src/pages/z_Resources/resources.mdx'
    ),
  'src/pages/006-db-objects/database-objects.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-006-db-objects-database-objects" */ 'src/pages/006-db-objects/database-objects.mdx'
    ),
}
