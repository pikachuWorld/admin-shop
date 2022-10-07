<!--
 * @Author: pikachuworld jinqingemail@163.com
 * @Date: 2022-09-06 21:20:24
 * @LastEditors: pikachuworld jinqingemail@163.com
 * @LastEditTime: 2022-10-05 12:49:51
 * @FilePath: /e-commerce-admin/src/views/login/Login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-row>
    <el-col :span="3"><div class="grid-content ep-bg-purple" /> </el-col>
    <el-col :span="9">
      <div class="grid-content ep-bg-purple-light">
        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          status-icon
          :rules="rules"
          label-width="120px"
          class="demo-ruleForm"
        >
          <!--s-->
          <el-form-item label="用户名" prop="userName">
            <el-input v-model="ruleForm.userName" />
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input
              v-model="ruleForm.pass"
              type="password"
              autocomplete="off"
            />
          </el-form-item>
      

          <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)"
              >Submit</el-button
            >
            <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance } from "element-plus";
console.log('top===this==', this)
export default{
  name: 'login',
  data(){
    return {
      name: '',
      password: ''
    }
  },
  methods :{
    const ruleFormRef = ref<FormInstance>();

const validateUserName = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the username"));
  }
  
};
const validatePass = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the password"));
  }
  // else {
  //   if (ruleForm.pass !== '') {
  //     if (!ruleFormRef.value) return
  //     ruleFormRef.value.validateField('pass', () => null)
  //   }
  //   callback()
  // }
};
  }
}



const ruleForm = reactive({
  userName: "",
  pass: "",

});
// validateUsername
console.log('pass==validatePass', validatePass, 'this==', this)
const rules = reactive({
  userName: [{ validator: validateUserName, trigger: "blur" }],
  pass: [{ validator: validatePass, trigger: "blur" }],
 
});

const submitForm = (formEl: FormInstance | undefined) => {
  console.log('===submitForm11===formEl', formEl, !formEl, this)
  this.$router.push({name: "home"})
  // if (!formEl) return;
  // formEl.validate((valid) => {
  //   console.log('===submitForm22===formEl', valid, !!valid)
  //   if (valid) {
  //     console.log("submit!");
  //     // this.$router.push({name: "home"})
  //   } else {
  //     console.log("error submit!");
  //     return false;
  //   }
  // });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>
