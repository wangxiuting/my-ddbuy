<!--  -->
<template>
  <div id="category" class="clearfix">
    <seach/>
    <div class="clearBoth"></div>
    <div class="listWrapper" v-if="!isShowLoad">
      <div class="leftWrapper">
        <ul>
          <li
            class="eachLi"
            v-for="(cate ,index) in letCatData"
            :key="cate.id"
            :class="{selected:currentIndex === index}"
            @click="currentLi(index)"
          >
            <span>{{cate.name}}</span>
          </li>
        </ul>
      </div>
      <contentWripper :currentRightData="currentRightData"/>
    </div>
    <!--骨架屏 -->
    <skelakon v-if="isShowLoad"/>
    <!-- 加载动画 -->
    <loading v-show="isShowLoadGif"/>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import seach from "./components/search";
import contentWripper from "./components/contentRight";
// 点击左边加载数据前的动画
import loading from "../../components/loading/Loading";
// 引入骨架屏
import skelakon from "./Skelekon/skelekon";
// 接口
import { getCatData } from "../../api/api";
import { getCateDataRight } from "../../api/api";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    seach,
    contentWripper,
    loading,
    skelakon,
  },
  data() {
    //这里存放数据
    return {
      // 左边数据
      letCatData: [],
      // 选中当前li
      currentIndex: 0,
      // 右边数据
      currentRightData: [],
      isShowLoadGif: false,
      isShowLoad: true,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    async _initData() {
      // 1.左边数据
      let leftRes = await getCatData();
      if (leftRes.success) {
        this.letCatData = leftRes.data.cate;
      }

      // 2.右边数据
      let rightRes = await getCateDataRight("/lk001");
      if (rightRes.success) {
        this.currentRightData = rightRes.data.cate;
      }
      this.isShowLoad = false;
    },

    // 当前li
    async currentLi(index) {
      this.isShowLoadGif = true;
      this.currentIndex = index;
      let params;
      if (index >= 9) {
        params = `/lk0${index + 1}`;
      } else {
        params = `/lk00${index + 1}`;
      }
      let res = await getCateDataRight(params);
      if (res.success) {
        this.currentRightData = res.data.cate;
      }

      this.isShowLoadGif = false;
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this._initData();
  },
};
</script>
<style lang="less" scoped>
.clearBoth {
  height: 3rem;
}
.listWrapper {
  background-color: #f4f4f4;
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 3rem;
  top: 3rem;
  overflow: hidden;
  .leftWrapper {
    width: 5.3125rem;
  }
}
.eachLi {
  padding: 0.625rem;
  border-bottom: solid 0.01rem #e8e9e8;
  span {
    font-size: 0.7rem;
    color: #666666;
  }
}
.selected {
  background-color: #fff;
  border-left: 0.3125rem solid #3cb963;
  font-weight: bold;
  font-size: 0.875rem;
  color: #333333;
}
</style>
