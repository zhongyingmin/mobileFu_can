<template>
  <div class="refundAfter">
    <van-nav-bar class="head_nav" left-text="返回" title="退款售后" left-arrow @click-left="back" />
    <div class="refundAfter_main"></div>
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
    },
    goPath(path) {
      this.$router.push(path);
    }
  }
};
</script>
<style lang="scss" scoped>
.refundAfter {
  width: 100%;
  height: 100%;
}
</style>
