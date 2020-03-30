<!--  -->
<template>
  <div class="flashFood">
    <div class="flashSwiper">
      <ul class="ulSwiper">
        <li v-for="(product, index) in flashFoodList" :key="index" class="liSwiper">
          <img v-lazy="product.small_image" alt class="productImg" />
          <span class="prodcutName">{{ product.name }}</span>
          <div class="price">
            <p class="nowPrice">￥{{ product.price }}</p>
            <p class="oldPrice">￥{{ product.origin_price }}</p>
            <div class="buyCar">
              <svg-icon iconClass="car" style="width:1.3rem;height:1.3rem"></svg-icon>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Bscoll from "better-scroll";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    flashFoodList: Array
  },
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
.flashSwiper {
  width: 100%;
  overflow: hidden;
  position: relative;
}
.ulSwiper {
  display: flex;
  justify-content: flex-start;
}
.liSwiper {
  flex: 0 0 6rem;
  align-items: center;
  padding-right: 0.5rem;
}
img {
  width: 100%;
  border-radius: 50%;
  background-size: contain;
}
.prodcutName {
  padding: 0.2rem;
  display: inline-block;
  font-size: 0.6258rem;
  height: 1.8rem;
  line-height: 1rem;
  font-size: 0.625rem;
  word-break: break-all;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.price {
  text-align: left;
  padding-left: 0.625rem;
  position: relative;
}
.productImg {
  background-image: url("../../../images/placeholderImg/product-img-load.png");
}
.buyCar {
  position: absolute;
  right: 0.6rem;
  top: 0.1rem;
  width: 1.5rem;
  height: 1.5rem;
}
.nowPrice {
  color: #f37078;
  font-size: 0.928rem;
}
.oldPrice {
  font-size: 0.6875rem;
  color: #999999;
  text-decoration: line-through;
}
</style>
