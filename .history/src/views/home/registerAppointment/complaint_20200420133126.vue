<template>
  <div class="complaint">
    <van-nav-bar title="询问主诉" left-text="返回" left-arrow @click-left="back" />
    <div class="c_content">
      <div>
        <div class="c_title">主诉</div>
        <van-cell-group>
          <van-field v-model="value" placeholder="请输入你的就诊主诉" />
        </van-cell-group>
      </div>
      <div>
        <div class="c_title">病史</div>
        <van-cell-group>
          <van-field v-model="value" placeholder="请输入你的病史" />
        </van-cell-group>
      </div>
      <div>
        <div class="c_title">性别</div>
        <div class="input_select">
          请选择你是首次就诊或是复诊
          <van-icon class-prefix="iconfont iconxia" name="iconxia" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
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
.complaint {
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  .c_content {
    height: 100%;
    padding: 12px 20px;
    .input_select {
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
    > div {
      width: 100%;
      margin-bottom: 15px;
      .c_title {
        font-size: 13px;
        letter-spacing: 2px;
        color: #333333;
        margin-bottom: 10px;
      }
      .van-cell-group {
        .van-cell {
          border-radius: 5px;
          border: solid 1px #cccccc;
          margin: 0 auto;
          line-height: 22px;
          padding: 8px 16px;
          color: #999999;
        }
      }
    }
  }
}
</style>
