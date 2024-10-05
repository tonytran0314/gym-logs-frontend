import { createWebHistory, createRouter } from 'vue-router'

import AuthenticationView from '@/views/AuthView.vue'
import TestView from '@/views/TestView.vue'

const routes = [
  { path: '/', component: TestView },
  { path: '/signup', component: AuthenticationView },
  { path: '/login', component: AuthenticationView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router