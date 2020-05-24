<!--  -->
<template>
  <div id="todayMenu">
    <div class="todayMenuWripper">
      <div class="menuList">
        <ul ref="menuUl" style="width: max-content;">
          <li
            ref="menuLi"
            v-for="(item , index) in menuList"
            class="menuItem"
            :class="{selected : greenBorder == index}"
            :key="item.id"
            @click="eachLi(index)"
          >{{item.name}}</li>
        </ul>
      </div>
      <div class="menuAll" @click="changeCatListShow">
        <div v-if="!isShowCatList">
          <span>全部</span>
          <span>
            <svg-icon iconClass="down"></svg-icon>
          </span>
        </div>
        <div v-else>
          <span>收起</span>
          <span>
            <svg-icon iconClass="up"></svg-icon>
          </span>
        </div>
      </div>
    </div>
    <menuCatList :menuList="menuList" :isShowCatList="isShowCatList" />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { getTodayMenu } from "../../../api/api";
import BScoll from "better-scroll";
import menuCatList from "./menuCatList";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    menuCatList
  },
  data() {
    //这里存放数据
    return {
      menuList: [],
      // 显示隐藏分类菜单
      isShowCatList: false,
      greenBorder: 0
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    async _initData() {
      let todayCateMenu = await getTodayMenu();
      if (todayCateMenu.success) {
        this.menuList = todayCateMenu.data.list;
        this.$nextTick(() => {
          this._initMenuList();
        });
      }
    },

    // 菜单滑动
    _initMenuList() {
      // 1.动态计算出滚动区域的大小
      let contentWidth = 100;
      let eachMenu = this.$refs.menuLi;
      if (!this.menuTitleScroll) {
        for (let i = 0; i < eachMenu.length; i++) {
          contentWidth += eachMenu[i].clientWidth * 1.18;
        }
        // 2.给ul赋值，保证可以滚动
        this.$refs.menuUl.style.width = contentWidth + "px";
        this.menuTitleScroll = new BScoll(".menuList", {
          probeType: 3,
          startX: 0,
          click: true,
          scrollX: true
        });
      } else {
        // 如果dom结构发生改变，调用刷新方法
        this.menuTitleScroll.refresh();
      }
    },

    // 点击li标签
    eachLi(index) {
      this.greenBorder = index;
    },

    // 点击全部按钮
    changeCatListShow() {
      this.isShowCatList = !this.isShowCatList;
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
.selected {
  border: 1px solid #3cb963;
}
#todayMenu {
  padding-top: 6rem;
  width: 100%;
}
.todayMenuWripper {
  width: 100%;
  position: fixed;
  z-index: 99999;
  background-color: #fff;
  border-bottom: 0.0625rem solid #eee;
  padding-bottom: 0.125rem;
}
.menuList {
  width: 80%;
  height: 1.8rem;
  overflow: hidden;
  .menuItem {
    margin-right: 0.5rem;
    display: inline-block;
    font-size: 0.73rem;
    padding: 0.4rem;
    border: 1px solid #dedede;
    border-radius: 0.6rem;
    padding: 0.3rem;
  }
  .selected {
    color: #3cb963;
    border: 1px solid #3cb963;
  }
}
.menuAll {
  position: absolute;
  right: 0.8125rem;
  top: 0;
  font-size: 0.73rem;
  padding-top: 0.25rem;
}
.eachMenu {
  float: left;
  margin-right: 0.5rem;
  display: inline-block;
  font-size: 0.73rem;
  padding: 0.4rem;
  border: 1px solid #dedede;
  border-radius: 0.6rem;
  padding: 0.3rem;
}
</style>