import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import boutique from '@/components/boutique'
import shop from '@/components/shop'
import my from '@/components/my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/boutique',
      component: boutique
    },
    {
      path: '/shop',
      component: shop
    },
    {
      path: '/my',
      component: my
    }
  ]
})
