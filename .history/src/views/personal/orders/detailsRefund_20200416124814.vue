<template>
  <div class="detailsRefund">
    <van-nav-bar class="head_nav" left-text="返回" title="申请退款" left-arrow @click-left="back" />
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
