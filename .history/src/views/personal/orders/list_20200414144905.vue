<template>
  <div class="orders_list">
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    openaddress() {
      this.$router.push("/shippingAddress");
    }
  },
};
</script>
<style lang="scss" scoped>
.orders_list {
  width: 100%;
  height: 100%;
}
</style>
