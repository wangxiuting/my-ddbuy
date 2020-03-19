<!--  -->
<template>
  <div id="homeHeader">
    <div>
      <router-link to="/map"></router-link>
      <van-row>
        <van-col span="8" class="location" @click="goLocation">
          <van-icon name="location-o" />
          请选择位置</van-col
        >
        <van-col span="16" class="goodName">
          <van-icon name="search" />请输入商品名称</van-col
        >
      </van-row>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: "homeHeader",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    goLocation() {
      this.$router.push({ path: "./map" });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {}
};
</script>
<style lang="less" scoped>
#homeHeader {
  padding: 9px 9px;
}
.location {
  border-radius: 17px;
  background: #797572;
  color: #fff;
  padding: 4px;
  font-size: 14px;
}
.goodName {
  border-radius: 17px;
  background: #fff;
  color: #ababab;
  padding: 4px;
  font-size: 14px;
  margin-left: 16px;
}
.van-col--16 {
  width: 60.666667%;
}
</style>
