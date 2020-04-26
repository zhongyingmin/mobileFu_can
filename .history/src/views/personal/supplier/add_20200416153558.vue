<template>
  <div class="supplier_add">
    <van-nav-bar class="head_nav" left-text="返回" title="我的供应商" left-arrow @click-left="back" />
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
.supplier_add {
  width: 100%;
  height: 100%;
}
</style>
