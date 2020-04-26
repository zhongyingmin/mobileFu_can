<template>
  <div class="replenishment">
    <van-nav-bar title="一键补货" left-text="返回" left-arrow @click-left="back" />
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  created() {},
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
    },
  }
};
</script>
<style lang="scss" scoped>
.replenishment {
  width: 100%;
  height: 100%;
}
</style>
