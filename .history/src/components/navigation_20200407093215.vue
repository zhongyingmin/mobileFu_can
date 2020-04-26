<template>
  <div class="navigation">
    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="wap-home-o">
        主页
      </van-tabbar-item>
      <van-tabbar-item replace to="/mall" icon="cart-circle-o">
        商城
      </van-tabbar-item>
      <van-tabbar-item replace to="/learning" icon="like-o">
        学习
      </van-tabbar-item>
      <van-tabbar-item replace to="/shoppingCart" icon="cart-o">
        购物车
      </van-tabbar-item>
      <van-tabbar-item replace to="/personal" icon="smile-o">
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.navigation {
    position: fixed;
    bottom: 0;
    left: 0;
}
</style>
