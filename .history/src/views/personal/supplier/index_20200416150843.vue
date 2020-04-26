<template>
  <div class="supplier">
    <van-nav-bar class="head_nav" left-text="返回" title="我的供应商" left-arrow @click-left="back" />
    <div class="supplier_main"></div>
    <van-cell center icon="iconshangdian" icon-prefix="iconfont iconshangdian" is-link label="上海市闵行区上海康城小区城道80号503室">
      <template #title>
        <span class="custom-title">张杰医师</span>
      </template>
    </van-cell>
  </div>
</template>
<script>
export default {
  data() {
    return {};
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
    goPath(path) {
      this.$router.push(path);
    }
  }
};
</script>
<style lang="scss" scoped>
.supplier {
  width: 100%;
  height: 100%;
  .supplier_main {
    .van-cell {
      margin-bottom: 15px;
      padding: 10px 12px;
      i:first-child {
        width: 25px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: #c8a060;
        color: #fff;
        font-size: 12px;
      }
      .van-cell__left-icon {
        margin-right: 12px;
      }
      .van-cell__title {
        .custom-title {
          font-size: 15px;
          color: #000000;
          margin-right: 10px;
        }
        .phone {
          font-size: 12px;
          color: #666666;
        }
        .van-cell__label {
          font-size: 13px;
          color: #000000;
        }
        .orders_id {
          font-size: 12px;
          color: #000000;
        }
      }
    }
  }
}
</style>
