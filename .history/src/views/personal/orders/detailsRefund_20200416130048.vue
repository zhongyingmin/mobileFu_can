<template>
  <div class="detailsRefund">
    <van-nav-bar class="head_nav" left-text="返回" title="退款详情" left-arrow @click-left="back" />
    <div class="detailsRefund_main">
      <div class="d_date">
          <div>请等待商家处理</div>
          <div>还剩1天23时56分</div>
      </div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
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
.detailsRefund {
  width: 100%;
  height: 100%;
  .detailsRefund_main {
    width: 100%;
    height: auto;
    .d_date {
      width: 100%;
      height: 100px;
      background-color: #daaf6b;
      display: flex;
      align-items: center;
      flex-direction: column;
      padding-left: 40px;
      >div{
          width: 100%;
          height: 30px;
          color: #fff;
      }
    }
  }
}
</style>
