<template>
  <div class="hotMall">
    <van-nav-bar title="热门商品" left-text="返回" left-arrow @click-left="back" />
    <div class="hotMall_main">
        <div></div>
        <div></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
    goPath(path) {
      this.$router.push(path);
    },
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
.hotMall {
  width: 100%;
  min-height: 100vh;
  .hotMall_main{
      width: 100%;
      height: auto;
  }
}
</style>
