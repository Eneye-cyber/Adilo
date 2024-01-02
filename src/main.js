import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import './style.css'
import './assets/less/style.less'
import App from './App.vue'

const routes = [
  { 
    path: '/', 
    component: () => import('./pages/RecordingsPage.vue')
    },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})
const app = createApp(App)
app.use(router)

app.mount('#app')
