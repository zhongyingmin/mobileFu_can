<template>
  <div class="orders_info">
    <van-nav-bar class="head_nav" left-text="返回" title="订单详情" left-arrow @click-left="back" />
    <div class="orders_info_main">
      <van-cell center icon-prefix="iconfont iconfahuo" icon="iconfahuo" label="上海闵行区中药材厂">
        <template #title>
          <span class="custom-title">已发货</span>
          <span class="phone">订单编号127400274930</span>
        </template>
      </van-cell>
      <van-cell
        center
        icon-prefix="iconfont icondingwei"
        icon="icondingwei"
        is-link
        label="上海市闵行区上海康城小区城道80号503室"
      >
        <template #title>
          <span class="custom-title">张杰医师</span>
          <span class="phone">127400274930</span>
        </template>
      </van-cell>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      value: ""
    };
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
    openaddress() {
      this.$router.push("/shippingAddress");
    }
  }
};
</script>
<style lang="scss" scoped>
.orders_info {
  width: 100%;
  height: 100%;
  .orders_info_main {
    width: 100%;
    height: auto;
    padding: 15px 0 50px;
    .van-cell {
        margin-bottom: 15px;
        i{
            border-radius: 50%;
        }
    }
  }
}
</style>
