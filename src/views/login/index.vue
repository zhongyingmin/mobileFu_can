<template>
  <div class="login">
    <van-nav-bar
      class="head_nav"
      left-text="返回"
      left-arrow
      @click-left="back"
    >
    </van-nav-bar>
    <div class="login_head">
      <div class="h_title"></div>
      <div class="h_p">
        还没有账号，立即<router-link to="/registered">注册</router-link>
      </div>
    </div>
    <van-form @submit="handleSubmit">
      <van-field
        v-model="loginForm.userName"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="loginForm.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div>
        <van-button round block type="info" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
    <div class="login_footer">
      <div>
        <i class="iconlogin iconright iconfont icondunpai"></i>
        <span>验证码登录</span>
      </div>
      <div>
        <i class="iconlogin iconleft iconfont iconweixindenglu"></i>
        <span>微信登录</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginForm: {
        userName: "",
        password: ""
      }
    };
  },
  mounted() {},
  methods: {
    back() {
      if (window.history.length <= 1) {
        this.$router.push({ path: "/" });
        return false;
      } else {
        this.$router.go(-1);
      }
    },
    handleSubmit(event) {
      if (true) {
        let url =
          this.$route.query.redirect != "undefined" &&
          this.$route.query.redirect
            ? this.$route.query.redirect
            : "/";
        console.log(url);
        this.$store
          .dispatch("Login", this.loginForm)
          .then(() => {
            this.$router.push({ path: url });
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        console.log("error submit!!");
        return false;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  background-color: #fff;
  .login_head {
    padding: 60px 30px 0;
    .h_title {
      display: inline-flex;
      align-items: flex-end;
      height: 8px;
      background-image: linear-gradient(90deg, #e6c469 0%, #c8a060 100%),
        linear-gradient(#000000, #000000);
      background-blend-mode: normal, normal;
      margin-bottom: 6px;
    }
    .h_title::after {
      content: "登录";
      font-size: 25px;
    }
    .h_p {
      font-size: 14px;
      letter-spacing: 2px;
      > a {
        color: #c8a060;
      }
    }
  }
  .van-form {
    padding: 60px 30px;
    .van-cell {
      padding: 10px 0;
      margin-bottom: 25px;
    }
    > div:last-child {
      margin: 50px 0 0;
      > button {
        background-image: linear-gradient(90deg, #e6c469 0%, #c8a060 100%),
          linear-gradient(#ffffff, #ffffff);
        background-blend-mode: normal, normal;
        border: none;
      }
    }
  }
  .login_footer {
    display: flex;
    padding: 0 25%;
    justify-content: space-between;
    div {
      i,
      span {
        display: block;
        text-align: center;
        font-size: 14px;
      }
      .iconleft {
        color: #09bb08;
      }
      .iconright {
        color: #02a9f1;
      }
    }
    .iconlogin {
      font-size: 45px;
    }
  }
}
</style>
