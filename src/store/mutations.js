import {
  USER_INFO,
  ADD_GOODS,
  ADD_TO_CART,
  REDUCE_GOODS
} from "./mutation-type";
import { setLocalStore } from "../../config/globalSave";
import Vue from "vue";
import router from "../router/index";
import { Toast } from "vant";
export default {
  [USER_INFO](state, { userInfo }) {
    // 将传过来的userInfo保存到state里面
    state.userInfo = userInfo;
    // 存到缓存中
    setLocalStore("userInfo", state.userInfo);
  },

  // 添加商品
  // 判断是否已经有无次此商品 做出进一步的操作
  [ADD_GOODS](state, { goodsID, goodsName, smallImage, goodsPrice }) {
    let shopCart = state.shopCart;

    // 1.1 判断商品是否存在
    if (shopCart[goodsID]) {
      // 让数量goodsID里面的num +1
      shopCart[goodsID]["num"]++;
    } else {
      // 1.2 不存在则设置默认值
      shopCart[goodsID] = {
        num: 1,
        id: goodsID,
        name: goodsName,
        price: goodsPrice,
        smallImage: smallImage,
        checked: true
      };
      // 1.3 给shopCart产生新对象
      state.shopCart = {
        ...shopCart
      };
    }
    // 1.4 将数据存储到本地
    setLocalStore("shopCart", state.shopCart);
  },

  // 添加到购物车
  [ADD_TO_CART](state, goods) {
    // 判断是否有用户登录
    if (state.userInfo.token) {
      // 1.3 添加数据
      // 延迟900毫秒等待动画结束
      setTimeout(() => {
        this.commit("ADD_GOODS", {
          goodsID: goods.id,
          goodsName: goods.name,
          smallImage: goods.small_image,
          goodsPrice: goods.price
        });
        Toast({
          message: "成功加入购物车",
          duration: 800
        });
      }, 900);
    } else {
      // 1.4 如何没有登录跳转到登录界面
      router.push("/login");
    }
  },

  // 删除商品
  [REDUCE_GOODS](state, { goodsId }) {
    // 先找到该商品
    // 通过id呀
    console.log(goodsId);
    let shopCart = state.shopCart;
    console.log(shopCart);
    let good = shopCart[goodsId];
    console.log(good);
    // 找到该商品
    if (good) {
      if (good["num"] > 0) {
        good.num--;
      }
      if (good["num"] == 0) {
        delete shopCart[goodsId];
      }
      // 再同步state数据
      state.shopCart = { ...shopCart };
      // 再同步本地数据
      setLocalStore("shopcart", state.shopCart);
    }
  }
};
