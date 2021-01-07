import { createApp } from 'vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/home/Home'
import Cart from '../views/cart/Cart'
import Profile from '../views/profile/Profile'
import Setting from '../views/setting/Setting'


Vue.use(VueRouter)


const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/setting',
    component:Setting
  }
]



const router = new VueRouter({
  routes,
  mode:'history'
})

export default router