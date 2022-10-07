<!--
 * @Author: pikachuworld jinqingemail@163.com
 * @Date: 2022-08-31 17:00:03
 * @LastEditors: pikachuworld jinqingemail@163.com
 * @LastEditTime: 2022-10-07 15:36:58
 * @FilePath: /e-commerce-admin/src/components/HelloWorld.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<script setup>
import SideMenu from './SideMenu.vue'
import { useCounterStore } from '../stores/counter'
import { useRoute, useRouter } from 'vue-router'
import OrderAdmin from './OrderAdmin/index.vue'
  // 声明
  const route = useRoute()
  const router = useRouter()

  // 获取query
  console.log(route.query)
  // 获取params
  console.log(route.params)

function logout(){
  const formStore = useCounterStore()
  formStore.clearUserInfo()
  console.log('logout==', formStore.username)
  // this.$router.push({name: 'login'})
   // 路由跳转
   router.push({
      path: `/login`
  })

}
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template> 

  <div class="common-layout">
    <el-container>
      
      <el-aside width="200px">
        <h2>电商后台管理系统</h2>
       <SideMenu></SideMenu>
      </el-aside>
      <el-container>
        <el-header>
          <h2 class="success-login">欢迎您登陆后台管理系统， 管理员用户!</h2>
          <span class="logout" @click="logout">注销</span>
        </el-header>
        <el-main>
          <OrderAdmin></OrderAdmin>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>


</template>

<style scoped  lang="scss">

$nav-color: red;
.home-page{
    background: $nav-color; 
}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}


.el-header{
  background: #a0cfff;
  display: flex;
  // flex-direction: row;
  justify-content: space-around;
  align-items: center;
  .success-login{
    font-size: 18px;
  }
  .logout{
    // width: 30px;
    // height: 30px;
    font-size: 18px;
    cursor: pointer;
  }

}
.el-aside{
 background: #6196cc;
 h2{
  font-size: 18px;
  text-align: center;
 }
}
.el-main{
  background: #a0cfff;
}
.el-footer{
  background: #a0cfff;
  text-align: center;
}
</style>