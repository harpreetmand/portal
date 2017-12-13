// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'

// import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import * as uiv from 'uiv'
// import 'vue-awesome/dist/vue-awesome.js'

import VueRouter from 'vue-router'
import { routes } from './routes'
import store from './store/store'
// import vmodal from 'vue-js-modal'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(uiv)
Vue.use(VueResource)
// Vue.use(vmodal)
// Vue.use(BootstrapVue)


Vue.http.options.root = ''
const router = new VueRouter({
  mode: 'history',
  routes
})

// router.beforeEach((to, from, next) => {
//   // console.log(this.loggedIn);
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (record.meta.requiresAuth) {
//   next({
//     path: '/login',
//     query: {
//       redirect: to.fullPath,
//     },
//   });
// } else {
//   next();
// }
//   } else {
//   next();
// }
// })

// router.beforeEach((to, from, next) => {
//   // if (transition.to.auth) {
//   //     if (!transition.to.router.app.$store.state.auth.authorized) {
//   //         transition.abort()
//   //         router.go({ path: "/" })
//   //     }
//   // }


// next()
// });


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
