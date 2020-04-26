<template>
  <div class="refundAfter">
    <div class="refundAfter_main"></div>
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
