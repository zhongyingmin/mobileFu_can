<template>
  <div class="myPharmacy">
    <van-nav-bar title="我的药房" left-text="返回" left-arrow @click-left="back" />
    <div class="myPharmacy_main">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
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
.myPharmacy {
  width: 100%;
  min-height: 100vh;
}
</style>
