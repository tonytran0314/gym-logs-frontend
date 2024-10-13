import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { 
    path: '/', 
    name: 'Home',
    component: () => import('@/views/TestView.vue'),
  },
  { 
    path: '/signup', 
    name: 'Signup',
    component: () => import('@/views/AuthView.vue'),
  },
  { 
    path: '/login', 
    name: 'Login',
    component: () => import('@/views/AuthView.vue'),
  },
  { 
    path: '/profile', 
    name: 'Profile',
    component: () => import('@/views/ProfileView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router