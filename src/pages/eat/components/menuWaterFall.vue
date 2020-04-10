<!--  -->
<template>
  <div id="container-water-fall" ref="waterFall">
    <waterfall :col="col" :data="data" @loadmore="loadmore">
      <div class="cell-item" v-for="(item,index) in data" :key="item.id">
        <img v-lazy="item.image" />
        <div class="item-body">
          <div class="item-desc">{{item.name}}</div>
          <div class="item-footer">
            <img class="avatar" v-lazy="item.author_avatar" alt />
            <div class="name">{{item.author_name}}</div>
          </div>
        </div>
      </div>
    </waterfall>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { getAllMenuDetail } from "../../../api/api";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      menuWaterFall: [],
      data: [],
      col: 2,
      // 加载当前页 默认1
      page: 1
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    async _initData() {
      // 加载前十条数据
      let res = await getAllMenuDetail("/lk01");
      this.menuWaterFall = res.data.big_recommend.list;
      this.data = res.data.big_recommend.list;
    },
    /*     _initChangeScroll() {
      // 滚动高度
      let scrollTop = document.documentElement.scrollTop;
      // 可视区高度
      let clientHeight = this.$refs.waterFall.offsetHeight;
      if (scrollTop > 0) {
        this._initData();
      }
      console.log(scrollTop, clientHeight);
    }, */

    loadmore(num) {
      let index = ++this.page;
      let param;
      if (index > 31) {
        Toast({
          message: $t("eat.tip_bottom"),
          duration: 800
        });
        return;
      } else {
        param = index >= 10 ? `/lk${index}` : `/lk0${index}`;
      }
      getAllMenuDetail(param).then(response => {
        if (response.success) {
          let newArray = response.data.big_recommend.list;
          this.data = this.data.concat(newArray);
        }
      });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this._initData();
  }
  //生命周期 - 挂载完成（可以访问DOM元素）
  /*   mounted() {
    window.addEventListener("scroll", this._initChangeScroll);
  },
  destroyed() {
    document.removeEventListener("scoll", this._initChangeScroll);
  } */
};
</script>
<style lang='less' scoped>
#container-water-fall {
  width: 100%;
  .vue-waterfall {
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 2rem;
  }
}
.cell-item {
  width: 100%;
  background: #ffffff;
  overflow: hidden;
  box-sizing: border-box;
  margin-bottom: 1px;
  padding: 0.3rem;
  img {
    border-radius: 12px;
    width: 100%;
    display: block;
    // 设置宽度足以 等比例缩小显示图片
    background-size: contain;
    background-image: url("../../../images/placeholderImg/product-img-load.png");
  }
  .item-body {
    padding: 0.6rem;
    .item-desc {
      font-size: 0.8 rem;
      color: #333333;
      line-height: 1rem;
      font-weight: bold;
    }
    .item-footer {
      margin-top: 1rem;
      position: relative;
      display: flex;
      align-items: center;
      .avatar {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
      }
      .name {
        max-width: 150px;
        margin-left: 10px;
        font-size: 0.75rem;
        color: #999999;
      }
    }
  }
}
</style>