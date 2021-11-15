
const routes = [
  {
    path: '/',
    // component: () => import('layouts/MainLayout.vue'),
    component: () => import('layouts/2layout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/bar', component: () => import('pages/bar.vue') },
      { path: '/line', component: () => import('pages/line.vue') },
      { path: '/eeg', component: () => import('pages/eeg.vue') },
      { path: '/Total', component: () => import('components/Total.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
