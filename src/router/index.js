import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './../views/Home'
import NotFound from './../components/404'


Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: "homeindex",
      component: Home,
      meta: { gtm: 'Home' }
    },
    {
      path: '*',
      component: NotFound,
    },

  ],



  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash }
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 }
    }
  }
  // scrollBehavior () {
  //   return { x: 0, y: 0 }
  // }
})
