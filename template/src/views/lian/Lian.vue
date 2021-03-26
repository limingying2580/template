<template>
  <div>
    <el-card class="box-card">
      <div class="title">
        <span>基本信息</span>
      </div>
      <div class="line"></div>
      <div class="table">
        <table border="1" cellspacing="0">
          <tr class="hang">
            <td class="label">项目名称</td>
            <td class="tian">
              <el-input v-model="name"></el-input>
            </td>
            <td class="label">企业名称</td>
            <td class="tian">
              <el-input v-model="name1"></el-input>
            </td>
          </tr>
          <tr class="hang">
            <td class="label">所属行业</td>
            <td>
              <el-input v-model="belong"></el-input>
            </td>
            <td class="label">省份</td>
            <td >
              <el-input v-model="area"></el-input>
            </td>
          </tr>
          <tr class="hang">
            <td class="label">一级行业</td>
            <td>
              <el-input v-model="one"></el-input>
            </td>
            <td class="label">成立时间</td>
            <td >
              <el-input v-model="time1"></el-input>
            </td>
          </tr>
          <tr class="hang">
            <td class="label" >二级行业</td>
            <td>
              <el-input v-model="two"></el-input>
            </td>
            <td class="label">上市时间</td>
            <td >
              <el-input v-model="time2"></el-input>
            </td>
          </tr>

          <tr class="hang">
            <td class="label">注册地址</td>
            <td colspan="3">
              <el-input v-model="where"></el-input>
            </td>
          </tr>
          <tr class="hang" >
            <td class="label">项目描述</td>
            <td colspan="3">
              <div ><el-input v-model="miaoshu" v-show="zhedei"></el-input></div>
              <div  class="quan" v-show="zhankai" >{{miaoshu}}</div>
              <div class="anniu">
                <el-tag @click="handle()" v-if="zhedei == true">展开<i class="el-icon-arrow-down"></i></el-tag>
                <el-tag @click="handle()" v-else type="warning">收起<i class="el-icon-arrow-up"></i></el-tag>
              </div>
            </td>
          </tr>
          <tr class="hang" >
            <td class="label">注册领域</td>
            <td colspan="3" >
              <div > <el-input v-model="lingyu" v-show="zhedei1"></el-input></div>
              <div  class="quan" v-show="zhankai1">{{lingyu}}</div>
              <div class="anniu">
                <el-tag @click="handle1()" v-if="zhedei1 == true">展开<i class="el-icon-arrow-down"></i></el-tag>
                <el-tag @click="handle1()" v-else type="warning">收起<i class="el-icon-arrow-up"></i></el-tag>
              </div>
            </td>
          </tr>
          <tr class="hang">
            <td class="label">经营范围</td>
            <td colspan="3"  >
              <div > <el-input v-model="fanwei" v-show="zhedei2"></el-input></div>
              <div  class="quan" v-show="zhankai2">{{fanwei}}</div>
              <div class="anniu">
                <el-tag @click="handle2()" v-if="zhedei2 == true">展开<i class="el-icon-arrow-down"></i></el-tag>
                <el-tag @click="handle2()" v-else type="warning">收起<i class="el-icon-arrow-up"></i></el-tag>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name:'',
      name1:'',
      belong:'',
      area:'',
      one:'',
      time1:'',
      two:'',
      time2:'',
      where:'',
      fanwei:'',
      miaoshu:'',
      lingyu: '',
      zhedei:true,
      zhankai:false,
      zhedei1:true,
      zhankai1:false,
      zhedei2:true,
      zhankai2:false,
      first:'',
      second:'',
      third:'',
    };
  },
  methods: {
    handle(){
      this.zhedei = !this.zhedei;
      this.zhankai = !this.zhankai;
    },
    handle1(){
      this.zhedei1 = !this.zhedei1;
      this.zhankai1 = !this.zhankai1;
    },
    handle2(){
      this.zhedei2 = !this.zhedei2;
      this.zhankai2 = !this.zhankai2;
    }
  }
}
</script>

<style >
.title span{
  width: 90%;
  font-size: 24px;
  font-weight: 700;
  margin-left: 50px;
}
.line{
  margin-top: 50px;
  margin-left: 50px;
  margin-bottom: 40px;
  width: 95%;
  border-bottom: 1px solid #999999;
}

.box-card {
  margin: 40px auto;
  width: 90%;

}
.table {
  width: 95%;
  margin-left:50px;
}
/*.table>>>el-table {*/
/*  margin-bottom: 20px;*/
/*}*/
.label {
  width: 200px;
  background-color: #F7F7F7;
}
.tian{
  width: 1000px;
}
.el-input__inner{
  font-size: 20px;
  width: 80%;
  border: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.hang {
  height: 80px;
  text-align: center;
  font-size: 20px;
}

.anniu {
  float: right;
}
.el-collapse {
  border: none;
  margin-bottom: 0;
}
.quan{
  margin-top: 15px;
  margin-left: 20px;
  width: 90%;
  text-align: left;
}

</style>
