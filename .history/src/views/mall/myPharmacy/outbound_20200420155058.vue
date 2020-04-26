<template>
  <div class="outbound">
    <van-nav-bar title="药房出库" left-text="返回" left-arrow @click-left="back" />
    <div class="outbound_content">
      <van-cell-group>
        <van-cell title="单据编号" />
        <van-cell center title="客户">
          <template #right-icon>
            <van-icon name="arrow-down" color="#666666" />
          </template>
        </van-cell>
        <van-cell center title="出库日期">
          <template #right-icon>
            <van-icon name="arrow-down" color="#666666" />
          </template>
        </van-cell>
        <van-cell center title="经手人">
          <template #right-icon>
            <van-icon name="arrow-down" color="#666666" />
          </template>
        </van-cell>
        <van-cell center title="条码扫描">
          <template #right-icon>
            <van-icon class-prefix="iconfont iconsaoyisao" name="iconsaoyisao" color="#666666" />
          </template>
        </van-cell>
      </van-cell-group>
    </div>
    <div class="footer_div">
      <div>打印</div>
      <div>提交</div>
    </div>
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
    }
  }
};
</script>
<style lang="scss" scoped>
.outbound {
  width: 100%;
  height: 100%;
  .footer_div {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    height: 45px;
    display: flex;
    border-top: 1px solid #d1d1d1;
    > div {
      width: 50%;
      height: 100%;
      display: inline-flex;
      justify-content: center;
      align-items: center;
    }
    > div:first-child {
      color: #666666;
    }
    > div:last-child {
      background-image: linear-gradient(90deg, #e6c469 0%, #c8a060 100%),
        linear-gradient(#ffffff, #ffffff);
      color: #fff;
    }
  }
}
</style>
