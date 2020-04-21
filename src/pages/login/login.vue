<!--  -->
<template>
  <div id="login">
    <div class="loginBox">
      <van-tabs v-model="active">
        <van-tab title="登录">
          <van-cell-group v-show="ismsgLogin">
            <van-form @submit="onSubmit">
              <van-field
                center
                clearable
                required
                v-model="phoneNumber"
                name="手机号"
                label="手机号"
                maxlength="11"
                placeholder="请输入手机号哟"
                :rules="[{ required: true, message: '请输入手机号哟' }]"
              />
              <van-field
                center
                clearable
                required
                name="验证码"
                label="验证码"
                maxlength="6"
                v-model="captcha"
                placeholder="请输入验证码哟"
              />
              <van-button
                type="primary"
                size="small"
                @click="sendVerifyCode"
                v-if="!countDown"
              >发送验证码</van-button>
              <van-button type="primary" size="small" v-else disabled>已发送{{ countDown }} s</van-button>
              <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">提交</van-button>
              </div>
            </van-form>
          </van-cell-group>
        </van-tab>
        <!--注册 -->
        <van-cell-group v-show="!ismsgLogin">
          <van-tab title="注册">
            <van-form @submit="signUp">
              <van-field
                v-model="phoneNumber"
                name="手机号"
                label="手机号"
                placeholder="请输入正确的手机号哟"
                :rules="[{ required: false, message: '请输入正确的手机号哟' }]"
              />
              <van-field
                v-model="password"
                type="password"
                name="密码"
                label="密码"
                placeholder="请输入正确的密码哟"
                :rules="[{ required: true, message: '请输入正确的密码哟' }]"
              />
              <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">注册</van-button>
              </div>
            </van-form>
          </van-tab>
        </van-cell-group>
      </van-tabs>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { Dialog } from "vant";
import { getPhoneCaptcha, phoneCaptchaLogin } from "../../api/api.js";
import { mapActions } from "vuex";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    return {
      phoneNumber: "",
      password: "",
      active: 0,
      captcha: "",
      // 倒计时
      countDown: 0,
      // 保存的手机短信验证码
      saveCaptcha: "",
      // 是否短信登录
      ismsgLogin: true,
    };
  },
  methods: {
    // 同步用户信息
    ...mapActions(["saveUserInfo"]),
    // 同步用户信息
    // 登录
    async onSubmit(values) {
      // 首先判断手机号是否正确
      // 其次是验证码是否是一致的
      if (!this.phoneNumberRight) {
        Dialog.alert({
          title: "错误",
          message: "手机号码不对",
        }).then(() => {
          // on close
        });
        return;
      } else if (this.captcha != this.saveCaptcha) {
        Dialog.alert({
          title: "错误",
          message: "验证码不对",
        }).then(() => {
          // on close
        });
        return;
      }
      // 请求后台登录接口
      let ref = await phoneCaptchaLogin(this.phoneNumber, this.captcha);
      // 将信息保存到熬本地和vuex
      this.saveUserInfo(ref.data);
      this.$router.back();
    },
    // 注册
    signUp() {
      console.log("signup");
      console.log("signUp");
    },

    // 发送验证码
    async sendVerifyCode() {
      console.log("sendVerifyCode");
      this.countDown = 60;
      this.timeInterval = setInterval(() => {
        this.countDown--;
        if (this.countDown == 0) {
          clearInterval(this.timeInterval);
        }
      }, 1000);
      let res = await getPhoneCaptcha(this.login_phone);
      if (res.success_code == 200) {
        console.log(1);
        this.saveCaptcha = res.data.code;

        // 弹框显示验证码内容
        Dialog.alert({
          title: "这是您的验证码",
          message: "验证码" + this.saveCaptcha,
        }).then(() => {
          // on close
        });
      }
    },
  },
  //监听属性 类似于data概念
  computed: {
    phoneNumberRight() {
      let res = this.phoneNumber;
      // 1.1 当输入的手机号大于10位进行验证
      if (res.length > 10) {
        return /[1][3,4,5,6,7,8][0-9]{9}$/.test(res);
      } else {
        return true;
      }
    },
  },
  //监控data中的数据变化
  watch: {},

  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>
<style lang="less" scoped>
#login {
  width: 100%;
  background: url("../../images/login/back2.jpg");
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.loginBox {
  /*  display: flex;
  align-items: center;
  justify-content: center; */
  width: 18.75rem;
}
.auth-form {
  position: relative;
  padding: 2rem;
  width: 26.5rem;
  max-width: 90%;
  font-size: 1.167rem;
  background-color: #fff;
  border-radius: 8px;
  box-sizing: border-box;
}
img {
  position: absolute;
  top: 1rem;
  left: 50%;
  width: 4rem;
  transform: translate(-50%, -70%);
  z-index: 1;
  @media screen and (max-width: 320px) {
    top: 0.5rem;
    transform: translate(-50%, -40%);
    width: 5rem;
  }
}
.closeButton {
  position: absolute;
  right: 1rem;
  top: 0.4rem;
}
.verificationImage {
  position: absolute;
  right: 0;
  width: 8rem;
  height: 3rem;
  margin-left: 3rem;
}
.switchLogin {
  margin-top: 1rem;
  font-size: 0.78rem;
}
</style>
