<template>
  <div id="mine">
    <van-nav-bar title="我的"  
                 :fixed=true
                 :border=false
                 style="height:2.5rem"/>
    <van-cell-group style="margin-top:2.4rem">
      <van-cell style="background-color: rgb(90, 191, 122);"  is-link center>
         <template>
           <div v-if="userInfo.token" class="userInfo" @click="goTo('personalData')">
            <img :src="userImage.loginIcon" alt="">
            <div class="basicInfo">
              <p>{{userInfo.user_name}}</p>
              <p>phoneNumber</p>
            </div>
            </div>
          <div v-else class="userInfo" @click="goTo('login')">
            <img :src="userImage.unLoginIcon" alt="">
            <div class="basicInfo">
              <p style="color:#fff ; margin-top:1.5rem">立即登录</p>
            </div>
          </div>
         </template>
      </van-cell>
    </van-cell-group>

    <vant-cell-group>
        <van-cell title="我的订单" value="查看全部订单" is-link icon="label">
        </van-cell>
        <van-grid :border="false">
          <van-grid-item v-for="(order , index) in orderData" :key="index" :icon='order.icon' :text="order.title"/>
         
        </van-grid>
    </vant-cell-group>

    <div style="margin-top:0.4rem">
      <vant-cell-group >
       <van-cell title="我的优惠券"  is-link icon="gold-coin"></van-cell>
       <van-cell title="我的收货地址"  is-link icon="todo-list"></van-cell>
      </vant-cell-group>
    </div>

   <div style="margin-top:0.4rem">
      <vant-cell-group >
       <van-cell title="我的绿卡"  is-link icon="vip-card" ></van-cell>
    </vant-cell-group>
   </div>


   <div style="margin-top:0.4rem">
      <vant-cell-group >
       <van-cell title="联系客服"  is-link icon="phone" value="客服时间 07:00 22:00"></van-cell>
       <van-cell title="意见反馈"  is-link icon="comment-circle" ></van-cell>
       <van-cell title="语言"  is-link icon="clock" ></van-cell>
      </vant-cell-group>
   </div>

  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {mapState} from 'vuex'

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      userImage:{
        loginIcon:require('../../images/mine/rep.jpg'),
        unLoginIcon:require('../../images/login/grey.jpg')
      },
      /* grid-item */
      orderData:[
        {title:'待支付' , icon:'cart-circle-o'},
        {title:'待收货' , icon:'gift-o'},
        {title:'待评价' , icon: 'smile-comment-o'},
        {title:'售后/退款' , icon:'cash-back-record'}
      ]
    };
  },
  //监听属性 类似于data概念
  computed: {
    ...mapState(["userInfo"])
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    goTo(name){
      this.$router.push({ name });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {}
};
</script>
<style lang="less" scoped>

.van-nav-bar {
  color: #fff;
  background-color: rgb(90, 191, 122);
  height: 6.25rem;
}
.userInfo{
  display: flex;
  flex-direction: row;
  img{
    width: 5rem;
    height: 4rem;
    border-radius: 50%
  }
  .basicInfo{
    margin-left: 1.875rem;
  }
  .van-icon{
    text-align: right;
    width: 100%;
    /* vertical-align: middle; */
    line-height: 60px;
  }
}
</style>
