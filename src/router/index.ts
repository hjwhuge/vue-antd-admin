import { createRouter, createWebHistory } from 'vue-router'
import Layout from '~/layout/index.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('~/pages/index.vue'),
      },
    ],
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'about',
        name: 'about',
        component: () => import('~/pages/hi/index.vue'),
      },
    ],
  },
]

const history = createWebHistory()

const router = createRouter({
  history,
  routes,
})

export default router
