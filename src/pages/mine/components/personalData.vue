<!--  -->
<template>
<div id='personalData'>
     <van-nav-bar title="个人资料"
                 :fixed=true
                 :border=false
                 left-arrow
                 @click-left ="goBack"
                 style="height:2.5rem;margin-bottom:2rem" />
    <div class="personalImg">
        <span>头像·</span>
        <img src="../../../images/mine/defaultImg.jpeg" alt="">
    </div>
    <van-cell-group>
        <van-cell title="头像" is-link value="内容" style="text-align:left"/>
        <van-cell title="昵称" is-link  value="我是你爹" @click="changeName" />
        <van-cell title="生日" is-link  value="未填写" />
        <van-cell title="手机号" is-link  value="18855227414" />
    </van-cell-group>

<van-button type="default" block style="margin-top:10px" @click="logOut('login')">退出了哟</van-button>

</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { Dialog} from 'vant'
import { mapMutations } from 'vuex';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {
    ...mapMutations(["LOGIN_OUT"])
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    goBack(){
        this.$router.back()
    },
    logOut(name){
        Dialog.confirm({
        title: '退出登录了哟',
        message: '确定要退出登录吗'
    })
    .then(() => {
        this.LOGIN_OUT()
        this.$router.back(-1)
    })
    .catch(() => {
    });
    },
    changeName(){
        this.$router.push({name:'changeName'});
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
}
</script>
<style lang='less' scoped>
#personalData{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom:0;
    background-color: #eee;
    .personalImg{
       display: flex;
        height: 3rem;
        width: 100%;
        margin-top: 3rem;
        padding: 0 16px;
        span{
             height: 3rem;
      line-height: 3rem;
      color: #323233;
      font-size: 14px;
        }
        img{
            position: absolute;
      right: 1.6rem;
      height: 2.5rem;
      width: 2.5rem;
        }
    }
}
.van-cell__title{
    text-align: left
}
</style>