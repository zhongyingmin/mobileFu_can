<template>
  <div class="reservation">
    <van-nav-bar title="预约" left-text="返回" left-arrow @click-left="back" />
    <div class="time_input">
      预约日期
      <van-icon class-prefix="iconfont iconxia" name="iconxia" />
    </div>
    <div class="time_input">
      预约时间
      <van-icon class-prefix="iconfont iconxia" name="iconxia" />
    </div>
    <div class="submit">
      <div class="submit_button" @click="goPath('/registerAppointment/personalDocument')">提交预约</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    goPath(path) {
      this.$router.push(path);
    },
    back() {
      if (window.history.length <= 1) {
        this.$router.push({ path: "/" });
        return false;
      } else {
        this.$router.go(-1);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.reservation {
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  .time_input {
    margin: 20px 20px;
    height: 40px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #999999;
    justify-content: space-between;
    background-color: #ffffff;
    border-radius: 5px;
    border: solid 1px #cccccc;
    i {
      font-size: 20px;
      color: #c8a060;
    }
  }
  .submit {
    width: 100%;
    padding: 20px 0;
    .submit_button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60%;
      height: 45px;
      margin: 0 auto;
      color: #fff;
      background-image: linear-gradient(90deg, #e6c469 0%, #c8a060 100%),
        linear-gradient(#ffffff, #ffffff);
      background-blend-mode: normal, normal;
      border-radius: 40px;
    }
  }
}
</style>
