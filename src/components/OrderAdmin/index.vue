<!--
 * @Author: pikachuworld jinqingemail@163.com
 * @Date: 2022-08-31 17:00:03
 * @LastEditors: pikachuworld jinqingemail@163.com
 * @LastEditTime: 2022-10-07 22:40:32
 * @FilePath: /e-commerce-admin/src/components/HelloWorld.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="content-main">
    <div>
      <el-row>
        <div class="demo-input-suffix">
          商品名称：
          <el-input placeholder="请输入内容" v-model="params.productName" clearable>
          </el-input>
        </div>
        <div class="demo-input-suffix">
          收货人：
          <el-input placeholder="请输入内容" v-model="params.consignee" clearable>
          </el-input>
        </div>
        <div class="demo-input-suffix">
          支付时间：
          <el-date-picker
            v-model="payTime"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </div>
      </el-row>
      <el-row>
        
        <div class="demo-input-suffix">
          用户名称：
          <el-input placeholder="请输入内容" v-model="params.userName" clearable>
          </el-input>
        </div>
        <div class="demo-input-suffix">
          手机号：
          <el-input placeholder="请输入内容" v-model="params.iphone" clearable>
          </el-input>
        </div>
        <div class="demo-input-suffix">
          发货时间：
          <el-date-picker
            v-model="params.sentTime"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </div>
      </el-row>
      <el-row>
        <el-button type="primary" @click="requestData">筛选</el-button>
        <el-button type="primary" @click="clear">清空筛选</el-button>
        <el-button type="primary" @click="exportData">导出</el-button>
        <el-button type="primary" @click="dispatchGoods">批量发货</el-button>
        <el-button type="primary" @click="exportDispatchGoods">下载批量</el-button>
      </el-row>
    </div>
    <div class="order-table">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">
          <el-table
            ref="multipleTable"
            :data="orderList"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="55"> </el-table-column>
            <el-table-column label="商品" width="100" prop="name">
              <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
            </el-table-column>
            <el-table-column prop="price"  label="总价/数量" width="100">
            </el-table-column>
            <el-table-column prop="buyer" label="买家信息"  width="100" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="time" label="交易时间" width="100" >
            </el-table-column>
            <!-- <el-table-column prop="time" label="交易时间" width="100" show-overflow-tooltip>
            </el-table-column> -->
            <el-table-column  label="分销信息" width="100" >
              <template #default="scope">
                {{ scope.row.date }}
                <el-tag size="medium" :type="scope.row.role ? '': 'info'">
                  {{scope.row.role ? '经理': '分销员'}}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column  label="状态" width="100" >
              <template #default="scope">
                <!-- {{ scope.row.date }} -->
                <el-tag size="medium" :type="scope.row.state ? 'success': 'danger'">
                  {{scope.row.state ? '已完成': '未完成'}}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column  label="操作" width="200" >
              <template #default="scope">
                <el-button size="mini" type="danger"
                 @click="deleteItem(scope.$index)" >删除</el-button>
                <el-button size="mini" type="primary"
                @click="callUser(scope.row)"
                >联系客户</el-button>
              </template>
            </el-table-column>
            <el-table-column  label="支付方式" width="100" >
              <template #default="scope">
                <el-tag size="medium" >
                  {{scope.row.payTime ? '微信': '支付宝'}}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="source" label="来源" width="200" >
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth"
          >定时任务补偿</el-tab-pane
        >
      </el-tabs>
    </div>
  </div>
</template>
<script>
  import Mock from '../../mock/Mock'
  import Tools from '../../Tools/Tools';
export default {
  data() {
    return {
      // orderList
      orderList: [],
      params: {
        productName: "", // 商品名称
        consignee: "", // 收货人
        payTime: "", // 支付时间
        userName: "",
        iphone: "",
        sentTime: "",
      },
      activeName: "first",
     
      multipleSelection: [],
    };
  },
  mounted(){
    const type = this.$route.params.type;
    this.orderList = Mock.getOrder(type)
    console.log('mounted==', type, this.orderList)
  },
  methods: {
    // 
    requestData(){
      console.log('==requestData')
      this.$message({
        type: 'success',
        message: '筛选请求参数：'+JSON.stringify(this.params)
      })
      const type = this.$route.params.type;
      this.orderList = Mock.getOrder(type)
    },
    //切换tab刷新数据
    handleClick(tab, event) {
      console.log(tab, event);
      this.$message({
        type: 'success',
        message: '切换tab刷新数据：'+JSON.stringify(this.params)
      })
      const type = this.$route.params.type;
      this.orderList = Mock.getOrder(type)
    },
    // 
    clear(){
      this.params= {
        productName: "", // 商品名称
        consignee: "", // 收货人
        payTime: "", // 支付时间
        userName: "",
        iphone: "",
        sentTime: "",
      },
      // const type = this.$route.params.type;
      this.orderList = Mock.getOrder(this.$route.params.type)
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      console.log('处理多选==handleSelectionChange',  val)
      this.multipleSelection = val;
    },
    exportData(){
      Tools.exportJson('订单.json', JSON.stringify(this.orderList))
    },
    //
    exportDispatchGoods(){
      Tools.exportJson('发货单.json', JSON.stringify(this.multipleSelection))
    }
  },
};
</script>
<style scoped  lang="scss">
.content-main {
  background: #fff;
  padding: 10px 0 10px 10px;
  border-radius: 5px;
  .demo-input-suffix {
    .el-input {
      margin-right: 15px;
      width: 180px;
    }
    // UI传透
    ::v-deep .el-input__wrapper {
      width: 300px;
    }
  }
  ::v-deep div.el-row:nth-child(2),
  ::v-deep div.el-row:nth-child(3),
  .order-table {
    margin-top: 20px;
  }
  //   .order-table{
  //     margin-top: 20px;
  //   }
}
</style>