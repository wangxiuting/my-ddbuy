// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import lazyLoad from "vue-lazyload";
import store from "./store/store";
import "./icons"; // icon
import waterFall from "vue-waterfall2";
import less from "less";
Vue.use(less);
Vue.use(lazyLoad);
Vue.use(waterFall);
Vue.config.productionTip = false;

// 全局引入rem
import "@/../config/rem";
// vant
import "@/plugins/vant";
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
  store
});