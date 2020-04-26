<template>
  <div class="myPharmacy">
    <van-nav-bar title="我的药房" left-text="返回" left-arrow @click-left="back" />
    <div class="myPharmacy_main">
      <div>
        <van-icon name="icongongyingshang" class-prefix="iconfont icongongyingshang" />
        <span>药房商城</span>
      </div>
      <div>
        <van-icon name="iconkucunchaxun" class-prefix="iconfont iconkucunchaxun" />
        <span>药房库存</span></div>
      <div>
        <van-icon name="iconrukudan" class-prefix="iconfont iconrukudan" />
        <span>药房入库</span></div>
      <div>
        <van-icon name="iconchukudan" class-prefix="iconfont iconchukudan" />
        <span>药房出库</span></div>
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
  .myPharmacy_main {
    width: 100%;
    height: auto;
    padding: 10px;
    > div {
      padding: 20px 15px;
      margin-bottom: 15px;
      background-color: #fff;
      border-radius: 5px;
      overflow: hidden;
      i {
        font-size: 30px;
        color: #c8a060;
        display: inline-block;
        vertical-align: middle;
        margin-right: 5px;
      }
      span {
        display: inline-block;
        vertical-align: middle;
        color: #000000;
      }
    }
  }
}
</style>
