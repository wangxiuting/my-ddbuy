<!--  -->
<template>
  <div id="swiper">
    <van-swipe class="my-swipe" :autoplay="9000" indicator-color="white">
      <van-swipe-item v-for="(swaiper, index) in swaiperList">
        <img :src="swaiper.icon_url" alt="" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  props: {
    swaiperList: Array
  },
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
  created() {
    console.log(this.swaiperList);
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {}
};
</script>
<style lang="less" scoped>
#swiper {
  height: 200px;
  border: 1px solid red;
  border-radius: 10px;
  overflow: hidden;
  margin: 0 10px;
}
#swiper img {
  height: 100%;
}

.my-swipe {
  overflow: hidden;
  height: inherit !important;
}
.van-swipe-item {
  width: inherit !important;
  height: inherit !important;
}
</style>
