import Vue from "vue";
import Router from "vue-router";
import homePage from "@/pages/homePage/homePage";

// 按需加载五个组件
const home = () => import("../pages/home/Home.vue");
const eat = () => import("../pages/eat/eat.vue");
const category = () => import("../pages/category/category.vue");
const cart = () => import("../pages/cart/cart.vue");
const mine = () => import("../pages/mine/mine.vue");

// home模块组件
import map from "../pages/home/components/map.vue";
import swiper from "../pages/home/components/swiper.vue";
import tip from "../pages/home/components/tip.vue";
import nav from "../pages/home/components/tip.vue";
import myVip from "../pages/home/components/myVip.vue";
import flashSale from "../pages/home/components/flashSale.vue";
import flashFood from "../pages/home/components/flashSale.vue";
import specialZone from "../pages/home/components/specialZone.vue";
// 登录模块
import login from "../pages/login/login.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "homePage",
      component: homePage,
      children: [
        {
          path: "/homePage",
          redirect: "/homePage/home"
        },
        {
          path: "home",
          name: "home",
          component: home
        },
        {
          path: "eat",
          name: "eat",
          component: eat
        },
        {
          path: "category",
          name: "category",
          component: category
        },
        {
          path: "cart",
          name: "cart",
          component: cart
        },
        {
          path: "mine",
          name: "mine",
          component: mine
        },
        {
          path: "map",
          name: "map",
          component: map
        },
        {
          path: "swiper",
          name: "swiper",
          component: swiper
        },
        {
          path: "tip",
          name: "tip",
          component: tip
        },
        {
          path: "nav",
          name: "nav",
          component: nav
        },
        {
          path: "myVip",
          name: "myVip",
          component: myVip
        },
        {
          path: "flashSale",
          name: "flashSale",
          component: flashSale
        },
        {
          path: "specialZone",
          name: "specialZone",
          component: specialZone
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: login
    }
  ]
});
