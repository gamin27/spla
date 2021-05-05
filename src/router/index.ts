import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/home/home.vue'
import WinningPercentage from '@/views/winning/winning.vue'
import About from '@/views/about/about.vue'
import Schedule from '@/views/schedule/schedule.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: Schedule,
  },
  {
    path: '/WinningPercentage',
    name: 'WinningPercentage',
    component: WinningPercentage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
