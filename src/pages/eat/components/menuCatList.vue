<!--  -->
<template>
  <div id="menuWrapper">
    <div id="catList" v-show="isShowCatList">
      <span style=" font-size: 0.73rem;">菜单分类</span>
      <ul class="outerUl">
        <li class="innerLi" v-for="item in menuList" :key="item.id">{{item.name}}</li>
      </ul>
    </div>
    <WaterFallMenu v-show="!isShowCatList" />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import WaterFallMenu from "../components/menuWaterFall";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    WaterFallMenu
  },
  data() {
    //这里存放数据
    return {};
  },
  props: {
    menuList: Array,
    isShowCatList: Boolean
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
<style lang='less' scoped>
#menuWrapper{
    margin-top: 2rem;
}
#catList {
  padding: 15px 17px;
  text-align: left;
}
.outerUl {
  font-size: 0.73rem;
  display: flex;
  flex-flow: row wrap;
}
.innerLi {
  float: left;
  display: inline-block;
  font-size: 0.73rem;
  padding: 0.4rem;
  border: 1px solid #dedede;
  border-radius: 0.6rem;
  padding: 0.3rem;
  margin: 0 0.625rem 0.625rem 0;
}
</style>