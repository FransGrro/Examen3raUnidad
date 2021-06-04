import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/verAutos',
    name: 'VerAutos',
    component: () => import('../views/VerAutos.vue')
  },
  {
    path: '/Agregar',
    name: 'Agregar',
    component: () => import('../views/Agregar.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
