import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/home/home.vue'
import WinningPercentage from '@/views/winning/winning.vue'
import About from '@/views/about/about.vue'
import Stage from '@/views/stage/stage.vue'

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
    path: '/stage',
    name: 'Stage',
    component: Stage,
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
