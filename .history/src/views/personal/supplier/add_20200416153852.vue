<template>
  <div class="supplier_add">
    <van-nav-bar class="head_nav" left-text="返回" title="添加供应商" left-arrow @click-left="back" />
    <div class="supplier_add_main">
      <div class="s_item"></div>
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
  .supplier_add_main {
    width: 100%;
    height: auto;
  }
}
</style>
