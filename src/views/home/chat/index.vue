<template>
  <div class="chat">
    <van-nav-bar
      title="张杰安"
      left-text="返回"
      left-arrow
      @click-left="back"
    />
    <div class="flxed_bottom">
      <div class="flxed_b_left">
        <van-icon class-prefix="iconfont icontianjia" name="icontianjia" />
        <van-icon class-prefix="iconfont iconbiaoqing" name="iconbiaoqing" />
      </div>
      <van-field
        v-model="message"
        rows="1"
        autosize
        type="textarea"
        placeholder="请输入你的问题"
      />
      <div class="flxed_b_right">
        <van-icon class-prefix="iconfont iconicon_sent" name="iconicon_sent" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: ""
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
.chat {
  width: 100%;
  height: 100%;
  .flxed_bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    height: auto;
    border-top: 1px solid #ebedf0;
    background-color: #fff;
    > div {
      display: inline-block;
      vertical-align: bottom;
      margin-bottom: 6px;
    }
    .flxed_b_left {
      width: 24%;
      position: relative;
      bottom: 0px;
      padding-left: 10px;
      i {
        font-size: 30px;
        color: #646566;
        margin-right: 5px;
      }
      i:last-child {
        margin-right: 0;
      }
    }
    .van-cell {
      width: 60%;
      border-radius: 20px;
      padding: 4px 16px;
      margin: 8px 0;
      background-color: #f7f8fa;
    }
    .flxed_b_right {
      width: 10%;
      text-align: right;
      padding-bottom: 2px;
      i {
        font-size: 28px;
        color: #646566;
      }
    }
  }
}
</style>
