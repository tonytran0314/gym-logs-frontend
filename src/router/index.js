import { createWebHistory, createRouter } from 'vue-router'
import { api } from '@/services/axios.js'

const routes = [

  /* -------------------------------------------------------------------------- */
  /*                                  MAIN VIEW                                 */
  /* -------------------------------------------------------------------------- */
  {
    path: '/',
    component: () => import('@/views/MainView.vue'),
    beforeEnter: async (to, from, next) => {
      try {
        const res = await api.get('/is-authenticated')
        
        if(res.data.isAuthenticated) { next() } 
        else { next({ name: 'Login' }) }
      } catch (error) {
        console.log(error) 
      }
    },
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/components/dashboard/Container.vue'),
      },
      {
        path: 'profile',
        name: 'Profile',
        component: () => import('@/components/profile/Container.vue'),
      },
    ],
  },
  


  /* -------------------------------------------------------------------------- */
  /*                             AUTHENTICATION VIEW                            */
  /* -------------------------------------------------------------------------- */
  {
    path: '/login',
    component: () => import('@/views/AuthView.vue'),
    beforeEnter: async (to, from, next) => {
      try {
        const res = await api.get('/is-authenticated')
        
        if(res.data.isAuthenticated) { next({ name: 'Home' }) } 
        else { next() }
      } catch (error) {
        console.log(error) 
      }
    },
    children: [
      {
        path: '',
        name: 'Login',
        component: () => import('@/components/auth/LoginForm.vue'),
      }
    ],
  },
  { 
    path: '/signup', 
    component: () => import('@/views/AuthView.vue'),
    beforeEnter: async (to, from, next) => {
      try {
        const res = await api.get('/is-authenticated')
        
        if(res.data.isAuthenticated) { next({ name: 'Home' }) } 
        else { next() }
      } catch (error) {
        console.log(error) 
      }
    },
    children: [
      {
        path: '',
        name: 'Signup',
        component: () => import('@/components/auth/SignupForm.vue'),
      }
    ],
  },



  
  { 
    path: '/onset', 
    name: 'On Set Screen',
    component: () => import('@/views/OnSetView.vue'),
    beforeEnter: async (to, from, next) => {
      try {
        const res = await api.get('/is-workingout')
        
        if(res.data.isWorkingout) { next() } 
        else { next({ name: 'Home' }) }
      } catch (error) {
        console.log(error) 
      }
    }
  },
  { 
    path: '/rest', 
    name: 'Rest Screen',
    component: () => import('@/views/RestView.vue'),
    beforeEnter: async (to, from, next) => {
      try {
        const res = await api.get('/is-workingout')
        
        if(res.data.isWorkingout) { next() } 
        else { next({ name: 'Home' }) }
      } catch (error) {
        console.log(error) 
      }
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router