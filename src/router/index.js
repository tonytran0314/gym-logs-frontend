import { createWebHistory, createRouter } from 'vue-router'

import AuthenticationView from '@/views/AuthView.vue'
import TestView from '@/views/TestView.vue'
import ProfileView from '@/views/ProfileView.vue';

const routes = [
  { 
    path: '/', 
    component: TestView,
    name: 'Home'
  },
  { 
    path: '/signup', 
    component: AuthenticationView,
    name: 'Signup'
  },
  { 
    path: '/login', 
    component: AuthenticationView,
    name: 'Login'
  },
  { 
    path: '/profile', 
    component: ProfileView,
    name: 'Profile'
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router