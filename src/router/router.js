import Vue from 'vue'
import Router from 'vue-router'
import seller from '../views/seller.vue'
import good from '../views/good'
import ratings from '../views/ratings'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/seller',
      name: 'seller',
      component: seller
    },
    {
      path: '/',
      name: 'good',
      component: good
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    }
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ]
})
