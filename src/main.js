import { createApp } from 'vue'
import './index.css'
import { createRouter } from 'vue-router'
import App from './App.vue'

const router = createRouter()

const app = createApp(App)

app
.use(router)
.mount('#app')
