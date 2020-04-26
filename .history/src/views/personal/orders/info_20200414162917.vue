<template>
  <div class="orders_list">
    <van-nav-bar class="head_nav" left-text="返回" title="订单详情" left-arrow @click-left="back"/>
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
.orders_list {
  width: 100%;
  height: 100%;
}
</style>
