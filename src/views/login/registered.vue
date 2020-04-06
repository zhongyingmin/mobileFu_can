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
      <div class="h_p">使用手机号码，快速注册成功</div>
    </div>
    <van-form @submit="handleSubmit">
      <van-field
        v-model="loginForm.userName"
        name="手机号"
        label="手机号"
        placeholder="请输入手机号"
        :rules="[{ required: true, message: '请输入手机号' }]"
      />
      <van-field
        v-model="loginForm.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="sms"
        center
        clearable
        label="短信验证码"
        placeholder="请输入短信验证码"
      >
        <template #button>
          <van-button size="small" type="primary">获取验证码</van-button>
        </template>
      </van-field>
      <div>
        <van-button round block type="info" native-type="submit">
          注册
        </van-button>
      </div>
    </van-form>
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
      content: "注册";
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
      .van-button--small {
        border-radius: 999px;
        border: none;
        background-image: linear-gradient(90deg, #e6c469 0%, #c8a060 100%),
          linear-gradient(#ffffff, #ffffff);
        background-blend-mode: normal, normal;
        padding: 0px 12px;
      }
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
    .iconlogin {
      font-size: 45px;
    }
  }
}
</style>
