<template>
  <div class="supplier">
    <van-nav-bar class="head_nav" left-text="返回" title="我的供应商" left-arrow @click-left="back" />
    <van-cell center icon-prefix="iconfont iconfahuo" icon="iconfahuo" label="上海闵行区中药材厂">
      <template #title>
        <span class="custom-title">已发货</span>
      </template>
    </van-cell>
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
.supplier {
  width: 100%;
  height: 100%;
}
</style>
