<!--  -->
<template>
  <div class="home">
    <div class="head">
      <homeHeader />
      <swiper :swaiperList="swaiperList" />
      <tip :home_ad="home_ad" />
    </div>
    <leader :nav_list="nav_list" />
    <myVip />
    <flashSale :flashFoodList="flashFoodList" />
    <specialZone :specialZone="specialZone" />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// 引入子组件
import homeHeader from "./components/header";
import swiper from "./components/swiper";
import tip from "./components/tip";
import leader from "./components/nav";
import myVip from "./components/myVip";
import flashSale from "./components/flashSale";
import specialZone from "./components/specialZone";
import { getHomeData } from "../../api/api.js";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    homeHeader,
    swiper,
    tip,
    leader,
    myVip,
    flashSale,
    specialZone
  },
  data() {
    //这里存放数据
    return {
      // 轮播图数据
      swaiperList: [],
      // 首页广告图片
      home_ad: "",
      // 10个导航
      nav_list: [],
      // 限时抢购
      flashFoodList: [],
      // 特殊专区的值
      specialZone: {}
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    async _initData() {
      const res = await getHomeData();
      console.log(res);
      this.swaiperList = res.data.list[0].icon_list;
      this.home_ad = res.data.home_ad.image_url;
      this.nav_list = res.data.list[2].icon_list;
      this.flashFoodList = res.data.list[3].product_list;
      this.specialZone = res.data.special_zone;
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this._initData();
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {}
};
</script>
<style lang="less" scoped>
.home {
}
.head {
  display: inline-block;
  width: 100%;
  background-image: url("http://518taole.7-orange.cn/backImage.png");
}
</style>
