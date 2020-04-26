<template>
  <div class="storage">
    <van-nav-bar title="药房入库" left-text="返回" left-arrow @click-left="back" />
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
    }
  }
};
</script>
<style lang="scss" scoped>
.storage {
  width: 100%;
  height: 100%;
}
</style>
