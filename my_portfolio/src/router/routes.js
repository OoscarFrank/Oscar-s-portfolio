
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: "", component: () => import('src/pages/IndexPage.vue') },
      { path: "AboutPage", component: () => import("pages/AboutPage.vue") },
      { path: "ProjectPage", component: () => import("pages/ProjectPage.vue") },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
