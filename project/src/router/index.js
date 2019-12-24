import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/home'
import City from '@/page/city/city'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/city/:id',
      name: 'city',
      component: City
    }
  ]
})
