/*
 * @Author: pikachuworld jinqingemail@163.com
 * @Date: 2022-08-31 17:00:03
 * @LastEditors: pikachuworld jinqingemail@163.com
 * @LastEditTime: 2022-10-08 16:15:30
 * @FilePath: /e-commerce-admin/src/router/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

import { useCounterStore } from '@/stores/counter'
import OrderAdmin from '@/views/OrderAdmin/Index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      children :[
        {
          path: 'order/:type', // 0是普通订单， 1是秒杀订单
          name: "order",
          // component: Order,
          component: OrderAdmin,
        }
      ],
      redirect: '/home/order/0'
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }, 
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/login/Login.vue')
    },

  ]
})

router.beforeEach((from) => {
  const counterStore = useCounterStore()
  // console.log('===beforeEach username}}}=',  counterStore.username)
  // console.log('===beforeEach  isLogin}}}=', counterStore.isLogin)
  const { isLogin }  = counterStore
  // console.log('====login ', isLogin, from.name)
  if(isLogin || from.name == 'login'){
  //  console.log('====login success', )
    return true
  } else {
    // console.log('====login error')
    return {name:'login'}
  }
 
})
export default router
