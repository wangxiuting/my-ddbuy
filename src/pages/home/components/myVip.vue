<!--  -->
<template>
  <div class="myVip">
    <div class="leftBox">
        <van-icon name="like-o" class="van-icon"/>
        <span class="joinVip">加入会员</span>
        <span class="joinVip">每年预计节省806元</span class="joinVip">
    </div>
    <div class="rightBox">
        <span>5折开卡></span>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
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
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {}
};
</script>
<style lang="less" scoped>
.myVip {
  width: 95%;
  margin: 0 auto;
  background-color: rgb(85, 192, 119);
  border-radius: .3125rem;
  padding: .5625rem .3125rem;
  overflow: hidden;
}
.joinVip{
    color: #fff;
    vertical-align: middle;
}
.leftBox{
   float: left;
   font-weight: 700;
    font-size: .875rem;
}
.rightBox{
    font-weight: 700;
    font-size: .875rem;
    float:right;
    color: #fff;
}
.van-icon{
    vertical-align:middle!important;
}
</style>
