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

// router.beforeEach((to, from, next) => {
//   let fullPath = to.fullPath
//   if (fullPath == '/login') {
//     util.cookies.deleteCookie('o-token')
//     next()
//   } else {
//     const token = util.cookies.getJsonCookie('o-token')
//     if (token) {
//       next()
//     } else {
//       next({
//         path: 'login'
//       })
//     }
//   }
// });


/* ----------------- custom ----------------- */
// import _navigator from "@/router/navigator";
//
// function _asNavigator(_nav) {
//   let _map = new Map()
//
//   for (let item of _nav) {
//     let _path = item.path;
//     if (!_path) {
//       _path = '/'
//     }
//
//     let _route = _map.get(_path);
//     if (!_route) {
//       _route = {
//         path: _path,
//         name: item.title,
//         component: Layout,
//         children: [],
//       }
//
//       _map.set(_path, _route)
//     }
//
//     for (let e of item.children) {
//       if (!e.path) {
//         continue
//       }
//
//       let child = {
//         path: e.path,
//         name: e.title,
//         component: e.compo,
//       };
//
//       _route.children.push(child)
//     }
//   }
//
//   let _routes = []
//   for (let val of _map.values()) {
//     _routes.push(val)
//   }
//   return _routes;
// }
//
// // add navigator to routes
// router.addRoutes(_asNavigator(_navigator))
//
/* ----------------- custom ----------------- */
