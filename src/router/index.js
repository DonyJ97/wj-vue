import Vue from 'vue'
import Router from 'vue-router'
import Appindex from '@/components/home/Appindex'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import calculate from '@/components/home/calculate'
import CarManager from '@/components/home/CarManager'
import Ball from '@/components/home/Ball'
import Home from '../components/Home'
import LibraryIndex from '../components/library/LibraryIndex'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      // home页面并不需要被访问
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'AppIndex',
          component: Appindex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/library',
          name: 'Library',
          component: LibraryIndex,
          meta: {
            requireAuth: true
          }
        },
      ]
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ball ',
      name: 'Ball',
      component: Ball
    },
    {
      path: '/CarManager',
      name: 'CarManager',
      component: CarManager
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/calculate',
      name: 'calculate',
      component: calculate
    },
  ]
})
