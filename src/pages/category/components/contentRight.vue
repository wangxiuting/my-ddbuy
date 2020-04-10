<!--  -->
<template>
  <div id="contentWripper">
    <div class="titleWrapper">
      <ul ref="menuUl">
        <li
          ref="menuLi"
          v-for="(item , index) in currentRightData"
          class="title"
          :key="item.id"
          :class="{selected:currentLiRight === index}"
          @click="currenLi(index)"
        >{{item.name}}</li>
      </ul>
    </div>
    <div class="clearFixDiv"></div>
    <section class="content" ref="proList">
      <div>
        <div v-for="(it , index) in currentRightData" :key="index" ref="good">
          <p class="contentTitle">{{it.name}}</p>
          <ul>
            <li class="proLi" v-for="(item , index) in it.products" :key="index">
              <div class="proDiv">
                <p>
                  <img v-lazy="item.small_image">
                </p>
                <div class="rightContent">
                  <p class="proTitle">{{item.product_name}}</p>
                  <p class="proContent">{{item.spec}}</p>
                  <p class="currentPrice">{{item.price }}</p>
                  <p class="oldPrice">{{item.origin_price}}</p>
                  <div class="addtoCart">
                    <svg-icon iconClass="car" style="width:1.5rem ; height:1.5rem"></svg-icon>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import BScroll from "better-scroll";
export default {
  //import引入的组件需要注入到对象中才能使用
  props: {
    currentRightData: Array,
  },
  components: {},
  data() {
    //这里存放数据
    return {
      // 当前选中的右侧li
      currentLiRight: 0,
      currentLi: 0,
      flag: true,
      arrli: 0,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    currentRightData() {
      this.$nextTick(() => {
        this._initProductScroll();
      });
    },
  },
  //方法集合
  methods: {
    // 初始化滚动

    _initProductScroll() {
      if (!this.productScroll) {
        this.productScroll = new BScroll(this.$refs.proList, {
          click: true,
          probeType: 3,
        });
      } else {
        this.productScroll.refresh();
        // 2.1 进入默认商品列表滚到顶部
        this.productScroll.scrollToElement(this.$refs.good[0], 10, 0, 0);
      }
    },
    // 选中右侧title
    currenLi(index) {
      console.log(1);
      this.currentLiRight = index;
      // 点击title切换对应菜品
      this.flag = true;
      // 3.0 判断如果蒙版存在 那么让它消失
      // 3.2 让产品列表根据点击的index值滚动
      this.arrli = index;
      this.productScroll.scrollToElement(this.$refs.good[index], 100, 0, 0);
      setTimeout(() => {
        this.flag = false;
      }, 100);
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.$nextTick(() => {
      this._initProductScroll();
    });
  },
};
</script>
<style lang='less' scoped>
.clearFixDiv {
  width: 100%;
  height: 2.7em;
}
#contentWripper {
  width: 100%;
  .titleWrapper {
    font-weight: 700;
    text-align: left;
    width: 100%;
    /* height: 2.8rem; */
    /* display: inline-block; */
    white-space: nowrap;
    border-bottom: solid 0.01rem #e8e9e8;
    overflow: hidden;
    position: fixed;
    z-index: 999;
    top: 2.8rem;
    background-color: white;
    .title {
      display: inline-block;
      font-size: 0.73rem;
      padding: 1rem;
    }
    .selected {
      color: #3cb963;
    }
  }
}
.menuList {
  width: 100%;
  overflow: hidden;
  flex-wrap: nowrap;
  .selected {
    color: #3cb963;
    border: 1px solid #3cb963;
  }
}
.content {
  position: absolute;
  left: 5.2rem;
  right: 0;
  top: 2.9rem;
  bottom: 0rem;
  overflow: hidden;
  transform: translateZ(0);
  // 防止抖动
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  .contentTitle {
    width: 100%;
    height: 2.375rem;
    text-align: left;
    font-size: 0.73rem;
    padding: 0.8125rem;
    font-weight: 700;
    box-sizing: border-box;
    color: #666666;
    border-left: 3px solid #6c7075;
    background-color: #f3f5f7;
  }
}

.proLi {
  img {
    width: 3.4rem;
    height: 3.4rem;
    border-radius: 0.3125rem;
  }
  .proDiv {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    position: relative;
    border-bottom: 1px solid #000;
    .rightContent {
      padding-left: 0.5rem;
      .proTitle {
        font-size: 0.8375rem !important;
        line-height: 1rem !important;
        color: #07111b !important;
        margin-bottom: -0.6rem !important;
      }
      .proContent {
        padding: 0.2rem;
        line-height: 0.8rem;
        font-size: 0.65rem;
        color: #93999f;
        margin-bottom: 0.16rem;
      }
      .currentPrice {
        display: inline;
        font-size: 0.75rem;
        color: red;
      }
      .oldPrice {
        display: inline;
        padding-left: 0.5rem;
        text-decoration: line-through;
        font-size: 0.6875rem;
        color: #b2b2b2;
      }
      .addtoCart {
        position: absolute;
        bottom: 1px;
        right: 1px;
      }
    }
  }
}
</style>