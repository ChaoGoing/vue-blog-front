import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/App.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path:　'/',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
