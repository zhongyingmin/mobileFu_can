<template>
  <div class="orders_info">
    <van-nav-bar class="head_nav" left-text="返回" title="订单详情" left-arrow @click-left="back" />
    <div class="orders_info_main">
      <van-cell center title="张杰医师"  icon="icondingwei" icon-prefix="iconfont icon-prefix" is-link label="描述信息" />
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
.orders_info {
  width: 100%;
  height: 100%;
}
</style>
