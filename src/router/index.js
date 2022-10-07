/*
 * @Author: pikachuworld jinqingemail@163.com
 * @Date: 2022-08-31 17:00:03
 * @LastEditors: pikachuworld jinqingemail@163.com
 * @LastEditTime: 2022-09-29 19:17:40
 * @FilePath: /e-commerce-admin/src/router/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import LoginView from '../views/login/Login.vue'
import { useCounterStore } from '../stores/counter'
console.log('===router===', useCounterStore)
// const counterStore = useCounterStore()
// console.log('===qq=', useCounterStore)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
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
  console.log('===beforeEach username}}}=',  counterStore.username)
  console.log('===beforeEach  isLogin}}}=', counterStore.isLogin)
  const { isLogin }  = counterStore
  console.log('====login ', isLogin, from.name)
  if(isLogin || from.name == 'login'){
   console.log('====login success', )
    return true
  } else {
    console.log('====login error')
    return {name:'login'}
  }
 
})
export default router
