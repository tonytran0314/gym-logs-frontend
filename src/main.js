import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './index.css'
import App from './App.vue'
import router from './router'
import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faHome, faGear, faUser, faClockRotateLeft, faRightFromBracket, faDumbbell, faXmark, faFire, faCalendarDays, faStar, faChartSimple, faUpLong, faDownLong, faChartLine, faChartPie, faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faHome, faGear, faUser, faClockRotateLeft, faRightFromBracket, faDumbbell, faXmark, faFire, faCalendarDays, faStar, faChartSimple, faUpLong, faDownLong, faChartLine, faChartPie, faBars, faArrowLeft) 


const app = createApp(App)
const pinia = createPinia()

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(pinia)
app.use(Toast)
app.mount('#app')
