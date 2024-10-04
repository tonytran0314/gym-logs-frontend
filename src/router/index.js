import { createWebHistory, createRouter } from 'vue-router'

import AuthenticationView from '@/views/AuthView.vue'

const routes = [
  { path: '/signup', component: AuthenticationView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router