import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  ,
  {
    path: '/',
    name: 'bienvenida',
    component: () => import('../views/BienvenidaView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router