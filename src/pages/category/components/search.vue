<!--  -->
<template>
  <div id="search">
    <div class="searchBox">
      <div class="iconBox">
        <svg-icon ref="svg" iconClass="search" class="icon"></svg-icon>
      </div>
      <span class="searchMenu">输入商品名称</span>
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
<style lang="less" type="text/less" scoped>
#search {
  background-color: #fff;
  z-index: 999999;
  padding: 0.625rem;
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  border-bottom: 1px solid #eee;
}
.searchBox {
  background-color: #f2f2f2;
  width: 100%;
  height: 1.75rem;
  line-height: 1.75rem;
  border-radius: 20px;
}
.iconBox {
  position: absolute;
  left: 0.8rem;
  width: 1.25rem;
  height: 1.25rem;
  svg:last-of-type {
    fill: #999;
    vertical-align: middle;
  }
}
.searchMenu {
  font-size: 1rem;
  margin: 0 0 0 2.125rem;
  float: left;
  vertical-align: middle;
  color: #b5b5b5;
}
.collectionBox {
  position: absolute;
  top: 0.7rem;
  right: -0.1rem;
  width: 2.5rem;
  height: 2rem;
}
.todayMenu {
  border-left: 0.3125rem solid #76a248;
  text-align: left;
  margin-top: 1.25rem;
  text-align: left;
  padding-left: 0.625rem;
  font-weight: 700;
}
</style>
