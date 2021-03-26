import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/order', component: () => import( /* webpackChunkName: "views.login" */ '@/views/ondemand/Order.vue') },
  { path: '/fail', component: () => import( /* webpackChunkName: "views.login" */ '@/views/ondemand/Fail.vue') },
  { path: '/close', component: () => import( /* webpackChunkName: "views.login" */ '@/views/ondemand/Close.vue') },
  { path: '/close_mem', component: () => import( /* webpackChunkName: "views.login" */ '@/views/ondemand/Close_mem.vue') },
  { path: '/success', component: () => import( /* webpackChunkName: "views.login" */ '@/views/ondemand/Success.vue') },
  { path: '/success_mem', component: () => import( /* webpackChunkName: "views.login" */ '@/views/ondemand/Success_mem.vue') },
  { path: '/cancel', component: () => import( /* webpackChunkName: "views.login" */ '@/views/ondemand/Cancel.vue') },
  { path: '/cancel_mem', component: () => import( /* webpackChunkName: "views.login" */ '@/views/ondemand/Cancel_mem.vue') },
  { path: '/member', component: () => import( /* webpackChunkName: "views.login" */ '@/views/ondemand/Member.vue') },
  { path: '/member_det', component: () => import( /* webpackChunkName: "views.login" */ '@/views/ondemand/Member_det.vue') },
  { path: '/extension', component: () => import( /* webpackChunkName: "views.login" */ '@/views/ondemand/Extension.vue') },
  { path: '/extension_succ', component: () => import( /* webpackChunkName: "views.login" */ '@/views/ondemand/Extension_succ.vue') },
  { path: '/code', component: () => import( /* webpackChunkName: "views.login" */ '@/views/ondemand/Code.vue') },
  { path: '/download', component: () => import( /* webpackChunkName: "views.login" */ '@/views/ondemand/Download.vue') },
  { path: '/share/curriculum', component: () => import( /* webpackChunkName: "views.login" */ '@/views/share/Curriculum.vue') },
  { path: '/share/experience', component: () => import( /* webpackChunkName: "views.login" */ '@/views/share/Experience.vue') },
  { path: '/share/teacher', component: () => import( /* webpackChunkName: "views.login" */ '@/views/share/Teacher.vue') },
  { path: '/share/student', component: () => import( /* webpackChunkName: "views.login" */ '@/views/share/Student.vue') },
  { path: '/share/offline', component: () => import( /* webpackChunkName: "views.login" */ '@/views/share/Offline.vue') },
  { path: '/share/broadcast', component: () => import( /* webpackChunkName: "views.login" */ '@/views/share/Broadcast.vue') },
  { path: '/offline/index', component: () => import( /* webpackChunkName: "views.login" */ '@/views/offline/Index.vue') },
  { path: '/offline/order', component: () => import( /* webpackChunkName: "views.login" */ '@/views/offline/Off_order.vue') },
  { path: '/offline/success', component: () => import( /* webpackChunkName: "views.login" */ '@/views/offline/Success.vue') },
  { path: '/form/index', component: () => import( /* webpackChunkName: "views.login" */ '@/views/form/Form_index.vue') },
  { path: '/privacy', component: () => import( /* webpackChunkName: "views.login" */ '@/views/privacy/Privacy.vue') },
  { path: '/protocol', component: () => import( /* webpackChunkName: "views.login" */ '@/views/privacy/Protocol.vue') },
  { path: '/opinion', component: () => import( /* webpackChunkName: "views.login" */ '@/views/ondemand/Opinion.vue') },
  { path: '/opinionSuccess', component: () => import( /* webpackChunkName: "views.login" */ '@/views/ondemand/OpinionSuccess.vue') },
  { path: '/lian', component: () => import(/* webpackChunkName: "views.login" */ '@/views/lian/Lian.vue')},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/* ----------------- custom ----------------- */

export default router
