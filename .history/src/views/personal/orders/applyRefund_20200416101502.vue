<template>
  <div class="applyRefund">
    <van-nav-bar class="head_nav" left-text="返回" title="申请退款" left-arrow @click-left="back" />
    <div class="applyRefund_main">
      <div>
        <div>
          <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </div>
        <div>
          <div>宁夏枸杞</div>
          <div>规格:250/g 3袋</div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
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
    },
    openaddress() {
      this.$router.push("/shippingAddress");
    }
  }
};
</script>
<style lang="scss" scoped>
.applyRefund {
  width: 100%;
  height: 100%;
  .applyRefund_main {
    width: 100%;
    height: auto;
  }
}
</style>
