import { createWebHistory, createRouter } from 'vue-router'
import { api } from '@/services/axios.js'

const isValidPage = (value) => {
  const pageNumber = Number(value);
  return Number.isInteger(pageNumber) && pageNumber > 0;
};

const authenticationCheck = async () => {
  try {
    const res = await api.get('/is-authenticated')

    return res.data.isAuthenticated
  } catch (error) {
    console.log(error) 
  }
}

const routes = [

  /* -------------------------------------------------------------------------- */
  /*                                 GUEST VIEW                                 */
  /* -------------------------------------------------------------------------- */
  {
    path: '/',
    component: () => import('@/views/GuestView.vue'),
    name: 'Guest',
    beforeEnter: (to, from, next) => {
      authenticationCheck()
      .then((isAuthenticated) => {
        if(isAuthenticated) { next({ name: 'Dashboard'}) } 
        else { next() }
      })
    }
  },


  
  /* -------------------------------------------------------------------------- */
  /*                                  MAIN VIEW                                 */
  /* -------------------------------------------------------------------------- */
  {
    path: '/',
    component: () => import('@/views/MainView.vue'),
    beforeEnter: (to, from, next) => {
      authenticationCheck()
      .then((isAuthenticated) => {
        if(!isAuthenticated) { next({ name: 'Login'}) } 
        else { next() }
      })
    },
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/components/dashboard/Container.vue'),
      },
      {
        path: 'profile',
        name: 'Profile',
        component: () => import('@/components/profile/Container.vue'),
      },
      {
        path: 'settings',
        name: 'Settings',
        component: () => import('@/components/settings/Container.vue'),
      },
      {
        path: 'history',
        name: 'History',
        component: () => import('@/components/history/Container.vue'),
        beforeEnter: (to, from, next) => {
          const page = to.query.page;
    
          // If `page` is not provided or invalid, redirect to page 1
          if (!page || !isValidPage(page)) {
            next({ name: 'History', query: { page: 1 } })
          } else {
            next() // Allow navigation
          }
        },
      },
    ],
  },
  


  /* -------------------------------------------------------------------------- */
  /*                             AUTHENTICATION VIEW                            */
  /* -------------------------------------------------------------------------- */
  {
    path: '/login',
    component: () => import('@/views/AuthView.vue'),
    beforeEnter: (to, from, next) => {
      authenticationCheck()
      .then((isAuthenticated) => {
        if(isAuthenticated) { next({ name: 'Dashboard'}) } 
        else { next() }
      })
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
    beforeEnter: (to, from, next) => {
      authenticationCheck()
      .then((isAuthenticated) => {
        if(isAuthenticated) { next({ name: 'Dashboard'}) } 
        else { next() }
      })
    },
    children: [
      {
        path: '',
        name: 'Signup',
        component: () => import('@/components/auth/SignupForm.vue'),
      }
    ],
  },



  /* -------------------------------------------------------------------------- */
  /*                                WORKOUT VIEW                                */
  /* -------------------------------------------------------------------------- */
  {
    path: '/workout',
    component: () => import('@/views/WorkoutView.vue'),
    beforeEnter: (to, from, next) => {
      authenticationCheck()
      .then((isAuthenticated) => {
        if(!isAuthenticated) { next({ name: 'Login'}) } 
        else { next() }
      })
    },
    children: [
      {
        path: '',
        name: 'Muscle Selection Screen',
        component: () => import('@/components/workout/MuscleSelection.vue'),
      },
      {
        path: '/select-exercise',
        name: 'Exercise Selection Screen',
        component: () => import('@/components/workout/ExerciseSelection.vue'),
      },
      {
        path: 'onset',
        name: 'On Set Screen',
        component: () => import('@/components/workout/OnSet.vue')
      },
      {
        path: 'rest',
        name: 'Rest Screen',
        component: () => import('@/components/workout/Rest.vue')
      },
    ],
  },



  /* -------------------------------------------------------------------------- */
  /*                                  404 VIEW                                  */
  /* -------------------------------------------------------------------------- */
  {
    path: '/:pathMatch(.*)*',
    name: 'Not Found',
    component: () => import('@/components/not_found/Container.vue'),
  },
]



const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router