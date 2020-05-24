<!--  -->
<template>
  <div class="cart">
    <header class="cartHead"><span style="font-weight:700">购物车</span> <span class="delGood" @click="delChooseGoods">删除</span></header>
    <div class="cartWrapper">
      <!-- 空的购物车 -->
      <div class="emptyCart" v-show="isShowEmptyCart">
        <img src="../../images/cart/empty.png" alt="" style="width:200px;margin:0 auto">
        <p>购物车人没有东西哟</p>
        <van-button
          type="default"
          style="width: max-content;margin: 0 auto;background-color: #45c763;color: white;border-radius:1rem"
        >去看看吧</van-button>
      </div>
      <div class="contentWrapper" v-show="!isShowEmptyCart">
        <div class="contentWrapperList" v-for="(goods) in shopCart" :key="goods.id">
          <section>
            <div class="shopCartListCon">
              <div class="left">
                <input type="checkbox" class="cartCheckBox" :checked="goods.checked" @click="setChecked(goods.id)">
              </div>
              <div class="center">
                <img :src="goods.smallImage">
              </div>
              <div class="right">
                <p class="price">{{goods.name}}</p>
                 <div class="bottomContent">
                  <p class="shopPrice"> {{goods.price}}</p>
                  <div class="shopDeal">
                    <span @click="reduceGoods(goods.id,goods.num)">-</span>
                    <input type="number"
                           disabled
                           v-model="goods.num">
                    <span @click="addGoods(goods.id,goods.name,
        goods.smallImage,goods.price)">+</span>
                  </div>
                  </div>
                </div>
              </div>
          </section>
            </div>
      </div>
      <!-- 猜你喜欢 -->
      <van-divider style="{ color: 'black',  padding: '0 16px' }">猜你喜欢</van-divider>
      <!--  -->
      <van-submit-bar :price="allTotlaPice" button-text="提交订单" >
        <van-checkbox v-model="checked" @click="checkedAll">全选</van-checkbox>
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { mapMutations, mapState, mapGetters } from "vuex";
import { getLocalStore } from "../../../config/globalSave.js";
import { Dialog } from "vant";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      // 空购物车
      isShowEmptyCart: false,
      // 商品数量
      goodNum: 1,
      // 复选框选中
      checked:false,
      totalPriceArr:[],
      allTotlaPice:0
    };
  },
  //监听属性 类似于data概念
  computed: {
    // 获取state数据
    ...mapState(["shopCart"]),
    allPrice(){
      this.totalPriceArr.forEach(item =>{
        this.allTotlaPice += item
      })
      return parseInt(this.allTotlaPice)
    }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    // 获取mutation的方法呀
    ...mapMutations(["REDUCE_GOODS" , "ADD_GOODS" , "SELECT_GOODS" , "DELETE_GOODS"]),

    // 减少商品
    reduceGoods(goodsId, goodsNum) {
      if (goodsNum > 1) {
        this.REDUCE_GOODS({ goodsId });
      }
      // 如果goodsnum大于1 就直接减少goods
      // 反之如果等于1 再减少 就提示 确定要删除该商品吗
      if (goodsNum == 1) {
        Dialog.confirm({
          title: "温馨提示您哦",
          message: "确定删除吗",
        }).then(() => {
          this.REDUCE_GOODS({goodsId})
        });
      }
    },

    // 添加goods
    addGoods(goodsID, goodsName, smallImage, goodsPrice ){
      this.ADD_GOODS({
        goodsID, goodsName, smallImage, goodsPrice
      })
    },

    // 删除goods
    delChooseGoods(){
      this.DELETE_GOODS()
    },

    // 复选框
    setChecked(goodsId){
      this.SELECT_GOODS({goodsId})
      let shopCart = this.shopCart;
      Object.values(shopCart).forEach(good =>{
        if(good.checked){
          this.totalPriceArr.push(good.price)
        }
      })
    },

    // 全选
    checkedAll(){
      let shopCart = this.shopCart;
      Object.values(shopCart).forEach(good =>{
          good.checked = !good.checked
      })
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>
<style lang="less" scoped>
.cart {
  background-color: #f5f5f5;
  padding:.3125rem;
  .delGood{
    float: right;
    font-size: 0.825rem;
    color: red
  }
}
.cartHead {
  width: 100%;
  height: 2.6rem;
  text-align: center;
  line-height: 2.6rem;
  background-color: #fff;
}
.emptyCart {
  display: flex;
  flex-direction: column;
}
.cartWrapper {
  width: 100%;
  height: 100rem;
}
.contentWrapper {
  padding-top: 0.5rem;
  section {
    background-color: #ffffff;
    .shopCartListCon {
      display: flex;
      height: 6rem;
      border-bottom: 0.01rem solid #e0e0e0;
      margin-bottom: 0.7rem;
      padding: 0.5rem 0;
      justify-content: center;
      align-items: center;
      .left {
        flex: 1;
        display: flex;
        a {
          display: inline-block;
          margin-top: 0.8rem;
          margin-left: 0.5rem;
        }
        .cartCheckBox {
              background: url("./../../images/cart/shop-icon.png") no-repeat;
              background-size: 2.5rem 5rem;
              width: 1rem;
              height: 1rem;
            }
            .cartCheckBox[checked] {
              background-position: -1.2rem 0;
            }
      }
      .center {
        flex: 3;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .right {
        flex: 6;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        position: relative;
        a {
          height: 2.2rem;
          line-height: 1.2rem;
          overflow: hidden;
          margin-bottom: 0.3rem;
          font-size: 0.8rem;
          color: #000;
        }
      }
    }
    .bottomContent {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .shopPrice {
        font-size: 0.8rem;
      }
      .shopDeal span {
        display: inline-block;
        width: 1rem;
        height: 1.2rem;
        line-height: 1.2rem;
        text-align: center;
        float: left;
        .shopPrice{

        }
      }
      .shopDeal input {
        float: left;
        width: 2rem;
        height: 1.2rem;
        text-align: center;
        margin: 0 0.2rem;
        font-size: 0.8rem;
        background-color: #f5f5f5;
        border: 0;
      }
    }
  }
  .price {
    font-size: 16px;
    text-align: left;
    padding-left: 10px;
  }
}
</style>
