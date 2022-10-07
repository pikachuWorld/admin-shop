<!--
 * @Author: pikachuworld jinqingemail@163.com
 * @Date: 2022-09-06 21:20:24
 * @LastEditors: pikachuworld jinqingemail@163.com
 * @LastEditTime: 2022-10-05 14:33:17
 * @FilePath: /e-commerce-admin/src/views/login/Login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="login-page">
    <div class="login">
      <h2 class="login-title">电商后台管理系统</h2>
      <div class="grid-content ep-bg-purple-light">
        <el-form ref="ruleFormRef" label-width="120px" class="demo-ruleForm">
          <!--s-->
          <el-form-item label="用户名" prop="userName">
            <el-input v-model="username" />
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input v-model="password" type="password" autocomplete="off" />
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm()">Submit</el-button>
            <!-- <el-button @click="resetForm()">Reset</el-button> -->
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
  
  <script >
//   import { reactive, ref } from "vue";
//   import type { FormInstance } from "element-plus";
//   console.log('top===this==', this)
import { useCounterStore } from "../../stores/counter";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  // setup() {
  //     const formStore = useCounterStore()
  //     console.log('==setup==counterStore', formStore)
  //     return { formStore }
  // },

  methods: {
    submitForm() {
      const formStore = useCounterStore();

      let info = {
        username: this.username,
        password: this.password,
      };
      console.log("==submit22===counterStore", info);
      // userInfo
      formStore.userInfo(info);
      this.$router.push({ name: "home" });
    },
  },
};
</script>
  <style scoped lang="scss">
.login-page {
  width: 100%;
  height: 100%;
  background: #c6e2ff;
  display: flex;
  justify-content: center;
  align-items: center;
  .login {
    margin-top: 50px;
    width: 500px;

    .login-title {
      text-align: center;
    }
  }
}
</style>