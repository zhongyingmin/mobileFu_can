<template>
  <div class="info">
      <div class="info_main">

      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
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
    },
  },
};
</script>
<style lang="scss" scoped>
.info {
  width: 100%;
  height: 100%;
  .info_main{
      width: 100%;
      height: auto;
  }
}
</style>
