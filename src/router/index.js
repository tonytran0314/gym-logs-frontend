import { createWebHistory, createRouter } from 'vue-router'
import { api } from '@/services/axios.js'

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
    beforeEnter: async (to, from, next) => {
      try {
        const res = await api.get('/is-authenticated')
        
        if(res.data.isAuthenticated) { next({ name: 'Profile' }) } 
        else { next() }
      } catch (error) {
        console.log(error) 
      }
    }
  },
  { 
    path: '/login', 
    name: 'Login',
    component: () => import('@/views/AuthView.vue'),
    beforeEnter: async (to, from, next) => {
      try {
        const res = await api.get('/is-authenticated')
        
        if(res.data.isAuthenticated) { next({ name: 'Profile' }) } 
        else { next() }
      } catch (error) {
        console.log(error) 
      }
    }
  },
  { 
    path: '/profile', 
    name: 'Profile',
    component: () => import('@/views/ProfileView.vue'),
  },
  { 
    path: '/onset', 
    name: 'On Set Screen',
    component: () => import('@/views/OnSetView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router