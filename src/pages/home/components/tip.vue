<!--  -->
<template>
  <div class="tip">
    <div class="top clearfix">
      <div class="tipBox">
        <img src="../../../images//icon//transport.png" alt="" />
        <span>最快29分钟内送达</span>
      </div>
      <div class="tipBox">
        <img src="../../../images//icon/money.png" alt="" />
        <span>0元起送 0配送费</span>
      </div>
      <div class="tipBox">
        <img src="../../../images//icon//seal.png" alt="" />
        <span>安心退</span>
      </div>
    </div>
    <div class="bottom">
      <img :src="home_ad" alt="" />
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  props: {
    home_ad: String
  },
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
.tip {
  overflow: hidden;
  text-align: center;
}
.tipBox {
  width: 33%;
  float: left;
}
.tipBox img {
  width: 20px;
  vertical-align: middle;
}
.tipBox span {
  color: rgb(76, 198, 104);
}
.tipBox span {
  font-size: 0.6rem;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: ""; /*不用有内容也可以*/
}

.clearfix:after {
  clear: both;
}

.clearfix {
  *zoom: 1 !important;
}

.top {
  padding: 6px 0;
}
.bottom {
  width: 100%;
}
.bottom img {
  width: inherit;
}
</style>
