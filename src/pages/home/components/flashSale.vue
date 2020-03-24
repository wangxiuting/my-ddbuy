<!--  -->
<template>
  <div class="flashSale">
    <div class="title">
      <div class="timeBuy">限时抢购</div>
      <div class="time">
        <van-count-down :time="time">
          <template v-slot="timeData">
            <span class="item">{{ timeData.hours }}</span>
            <span class="item">{{ timeData.minutes }}</span>
            <span class="item">{{ timeData.seconds }}</span>
          </template>
        </van-count-down>
      </div>
      <div class="more">
        <span>更多</span>
      </div>
    </div>
    <flashFood :flashFoodList="flashFoodList" />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import flashFood from "../components/flashFood";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    flashFood
  },
  props: { flashFoodList: Array },
  data() {
    //这里存放数据
    return {
      time: 30 * 60 * 60 * 1000
    };
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
.flashSale {
  margin-top: 1.5625rem;
}
.title {
  margin: 0 0.625rem 0.625rem 0.625rem;
  height: 1.5625rem;
}
.timeBuy {
  display: inline-block;
  border-left: 4px #3cb963 solid;
  padding-left: 0.3125rem;
  height: 1.3125rem;
  line-height: 1.3125rem;
  vertical-align: middle;
  float: left;
}
.time {
  float: left;
  margin-left: 0.625rem;
}
.item {
  display: inline-block;
  width: 1.375rem;
  margin-right: 0.3125rem;
  color: #fff;
  font-size: 0.75rem;
  text-align: center;
  background-color: black;
}
.more {
  float: right;
  color: #55c077;
  font-size: 0.8rem;
}
</style>
