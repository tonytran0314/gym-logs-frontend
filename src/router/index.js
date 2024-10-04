import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
//   { path: '/signup', component: HomeView },
//   { path: '/login', component: AboutView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})