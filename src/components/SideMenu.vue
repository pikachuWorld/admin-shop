<!--
 * @Author: pikachuworld jinqingemail@163.com
 * @Date: 2022-10-08 14:35:35
 * @LastEditors: pikachuworld jinqingemail@163.com
 * @LastEditTime: 2022-10-20 13:29:01
 * @FilePath: /admin-shop/src/components/SideMenu.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="side-menu">
    
    <el-row class="tac">
      <!-- <h5 class="mb-2">Default colors</h5> -->
      <el-menu
        default-active="route.path"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        @select="selectItem"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>订单管理</span>
          </template>
          <el-menu-item index="/home/order/0">普通订单</el-menu-item>
          <el-menu-item index="/home/order/1">秒杀订单</el-menu-item>
        </el-sub-menu>
        <!-- <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item> -->
        <el-sub-menu index="2">
          <template #title>
            <el-icon><icon-menu /></el-icon>
            <span>商品管理</span>
          </template>
          <el-menu-item index="home/goods/0">普通商品</el-menu-item>
          <el-menu-item index="/home/goods/1">秒杀商品</el-menu-item>
          <el-menu-item index="/home/goods/2">今日推荐</el-menu-item>
          <el-menu-item index="/home/goods/category">商品分类</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon><icon-menu /></el-icon>
            <span>店长管理</span>
          </template>
          <el-menu-item index="/home/owerlist">店长列表</el-menu-item>
          <el-menu-item index="/home/owerreq">店长申请列表</el-menu-item>
          <el-menu-item index="/home/owerorder">店长订单</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <el-icon><icon-menu /></el-icon>
            <span>财务管理</span>
          </template>
          <el-menu-item index="/home/tradeinfo">交易明细</el-menu-item>
          <el-menu-item index="/home/tradelist">财务对账单</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="5">
          <template #title>
            <el-icon><setting /></el-icon>
            <span>基础管理</span>
          </template>
          <el-menu-item index="/home/data">
            <span>数据统计</span>
            </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from "vue-router";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
const router = useRouter();
const route = useRoute();

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
function selectItem() {
  console.log("selectItem==", route.path);
}
</script>
<style scoped  lang="scss">
/* #6196cc */
.el-menu {
  background: #6196cc;
  width: 100%;
  border-right: none;
  li {
    background: #6196cc;
  }
  .is-active {
    background: #a0cfff;
    color: #fff;
  }
}
</style>
