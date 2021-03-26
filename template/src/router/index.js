import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/lian', component: () => import(/* webpackChunkName: "views.login" */ '@/views/lian/Lian.vue')},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/* ----------------- custom ----------------- */

export default router
