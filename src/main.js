// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import Router from 'vue-router';
import lazyLoad from "vue-lazyload";
import store from "./store/store";
import "./icons"; // icon
import waterFall from "vue-waterfall2";
import less from "less";
import css from '@/styles/index.css'
Vue.use(less);
Vue.use(css);
Vue.use(lazyLoad);
Vue.use(waterFall);
Vue.config.productionTip = false;

// 全局引入rem
import "@/../config/rem";
// vant
import "@/plugins/vant";
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
  store
});

 // 解决点击router报错 
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}