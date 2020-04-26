<template>
  <div class="navigation">
    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="iconshouye" icon-prefix="iconfont iconshouye">
        主页
      </van-tabbar-item>
      <van-tabbar-item replace to="/mall" icon="iconshangcheng" icon-prefix="iconfont iconshangcheng">
        商城
      </van-tabbar-item>
      <van-tabbar-item replace to="/learning" icon="like-o" icon-prefix="">
        学习
      </van-tabbar-item>
      <van-tabbar-item replace to="/shoppingCart" icon="cart-o" icon-prefix="">
        购物车
      </van-tabbar-item>
      <van-tabbar-item replace to="/personal" icon="smile-o" icon-prefix="">
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
