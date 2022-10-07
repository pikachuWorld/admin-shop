<!--
 * @Author: pikachuworld jinqingemail@163.com
 * @Date: 2022-08-31 17:00:03
 * @LastEditors: pikachuworld jinqingemail@163.com
 * @LastEditTime: 2022-10-05 13:14:57
 * @FilePath: /e-commerce-admin/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
// import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
// import { useCounterStore } from "../../stores/counter";
</script>

<template>
  <RouterView />
</template>

<style scoped>
  /* import './assets/base.css' */
  
header {
  /* line-height: 1.5; */
  height: 100px;
  /* background: red; */
  max-height: 100vh;
  width: 100%;
  height: 50px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  /* width: 100%; */
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    /* padding-right: calc(var(--section-gap) / 2); */
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    /* place-items: flex-start; */
    /* flex-wrap: wrap; */
    /* flex-direction: column; */
    justify-content: space-between;
    width: 100%;
  }

  nav {
    text-align: left;
    /* margin-left: -1rem; */
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
    display: flex;
  }
}
.el-header {
  background: #6196cc;
}
</style>
