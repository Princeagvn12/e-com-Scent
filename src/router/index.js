import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
     path: '/products',
    name: 'Products',
    component: () => import('../views/ProductsView.vue')
  },
  {
     path: '/connection',
    name: 'Connection',
    component: () => import('../views/ConnectionView.vue')
  },
  {
     path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active-link',
})



export default router
