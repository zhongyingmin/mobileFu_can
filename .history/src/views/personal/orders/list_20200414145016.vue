<template>
  <div class="orders_list">
    <van-nav-bar class="head_nav" left-text="返回" left-arrow @click-left="back">
      <van-search v-model="value" placeholder="请输入搜索关键词" slot="title" />
    </van-nav-bar>
    <div class="orders_list_main">

    </div>
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
  }
};
</script>
<style lang="scss" scoped>
.orders_list {
  width: 100%;
  height: 100%;
}
</style>
