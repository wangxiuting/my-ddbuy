<!--  -->
<template>
  <div id="container-water-fall">
    <waterfall :col="col" :data="data">
      <div class="cell-item" v-for="(item,index) in data" :key="item.id">
        <img v-lazy="item.image" />
        <div class="item-body">
          <div class="item-desc">{{item.title}}</div>
          <div class="item-footer">
            <div class="avatar" :style="{backgroundImage : `url(${item.avatar})` }"></div>
            <div class="name">{{item.user}}</div>
            <div class="like" :class="item.liked?'active':''">
              <i></i>
              <div class="like-total">{{item.liked}}</div>
            </div>
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
      col: 2
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    async _initData() {
      let res = await getAllMenuDetail("/lk01");
      this.menuWaterFall = res.data.big_recommend.list;
      this.data = res.data.big_recommend.list;
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
<style lang='less' scoped>
#container-water-fall {
  width: 100%;
}
.cell-item {
  width: 100%;
  img {
    width: 100%;
  }
}
</style>