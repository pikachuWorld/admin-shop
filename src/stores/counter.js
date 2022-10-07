/*
 * @Author: pikachuworld jinqingemail@163.com
 * @Date: 2022-08-31 17:00:03
 * @LastEditors: pikachuworld jinqingemail@163.com
 * @LastEditTime: 2022-10-05 13:49:27
 * @FilePath: /e-commerce-admin/src/stores/counter.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 0,
    username: '',
    password: '',
    isLogin: false
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
    // isLogin: (state) => {
    //   console.log('isLogin=getter=', state.username)
    //   state.username.length > 0
    // }
  
  },
  actions: {
    increment() {
      this.counter++
    },
    userInfo(payload){
     console.log(this.username, 'userInfo11====', payload)
     const {username, password} = payload
     this.username = payload.username
     this.password = payload.password
     if(username && password) this.isLogin = true
    },
    clearUserInfo (state){
     console.log('store==', state)
     this.username = ''
     this.password = ''

    }
  }
})
