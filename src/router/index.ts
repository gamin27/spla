import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import VModelTestPage from '../views/VModelTestPage.vue'
import ApolloTestPage from '../views/ApolloTestPage.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // todo: aboutの書式を合わせる
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/v-model-test-page',
    name: 'VModelTestPage',
    component: VModelTestPage,
  },
  {
    path: '/apollo-test-page',
    name: 'ApolloTestPage',
    component: ApolloTestPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
