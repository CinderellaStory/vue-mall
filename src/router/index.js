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
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/boutique',
      name: 'boutique',
      component: boutique
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop
    },
    {
      path: '/my',
      name: 'my',
      component: my
    }
  ]
})
