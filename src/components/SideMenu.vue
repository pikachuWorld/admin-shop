<!--
 * @Author: pikachuworld jinqingemail@163.com
 * @Date: 2022-09-09 21:10:04
 * @LastEditors: pikachuworld jinqingemail@163.com
 * @LastEditTime: 2022-10-05 12:31:50
 * @FilePath: /e-commerce-admin/src/components/SideMenu.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEtree
-->
<template>
  <!-- <p>====</p> -->
  <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" />
</template>
  
  <script lang="ts" setup>
interface Tree {
  label: string;
  children?: Tree[];
}

const handleNodeClick = (data: Tree) => {

  console.log('====',data);
};

const data: Tree[] = [
  {
    label: "订单管理",
    children: [
      {
        label: "普通订单",
      },
      {
        label: "秒杀订单",
      },
    ],
  },
  {
    label: "商品管理",
    children: [
      {
        label: "普通商品",
      },
      {
        label: "秒杀商品",
      },
      {
        label: "今日推荐",
      },
      {
        label: "商品分类",
      },
    ],
  },
  {
    label: "店长管理",
    children: [
      {
        label: "店长列表",
      },
      {
        label: "店长申请列表",
      },
      {
        label: "店长订单",
      },
     
    ],
  },
  {
    label: "财务管理",
    children: [
      {
        label: "交易明细",
      },
      {
        label: "财务对账单",
      },
    ],
  },
  {
    label: "基础管理",
  },
  {
    label: "数据统计",
  },
];

const defaultProps = {
  children: "children",
  label: "label",
};
</script>
  <!-- .el-aside{
 background: #a0cfff;
} -->
<style scoped  lang="scss">
  $bgcolor:#6196cc;
.el-tree{
 background: $bgcolor;
}
</style>