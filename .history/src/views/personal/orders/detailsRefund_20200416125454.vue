<template>
  <div class="detailsRefund">
    <van-nav-bar class="head_nav" left-text="返回" title="退款详情" left-arrow @click-left="back" />
    <div class="detailsRefund_main">
        <div></div>
        <div></div>
        <div></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
  }
};
</script>
<style lang="scss" scoped>
.detailsRefund {
  width: 100%;
  height: 100%;
}
</style>
