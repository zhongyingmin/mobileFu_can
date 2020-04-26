<template>
  <div class="navigation">
    <van-tabbar active-color="#7e3330" inactive-color="#000" route>
      <van-tabbar-item replace to="/home" icon="iconshouye" icon-prefix="iconfont iconshouye">主页</van-tabbar-item>
      <van-tabbar-item
        replace
        to="/mall"
        icon="iconshangcheng"
        icon-prefix="iconfont iconshangcheng"
      >商城</van-tabbar-item>
      <van-tabbar-item
        replace
        to="/learning"
        icon="iconjiankang"
        icon-prefix="iconfont iconjiankang"
      >学习</van-tabbar-item>
      <van-tabbar-item
        replace
        to="/shoppingCart"
        icon="icongouwuche"
        icon-prefix="iconfont icongouwuche"
      >购物车</van-tabbar-item>
      <van-tabbar-item replace to="/personal" icon="iconwode" icon-prefix="iconfont iconwode">我的</van-tabbar-item>
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
  .van-tabbar {
    i {
      font-size: 18px;
    }
  }
}
</style>
