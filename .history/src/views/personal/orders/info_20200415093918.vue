<template>
  <div class="orders_info">
    <van-nav-bar class="head_nav" left-text="返回" title="订单详情" left-arrow @click-left="back" />
    <div class="orders_info_main">
      <van-cell center icon-prefix="iconfont iconfahuo" icon="iconfahuo" label="上海闵行区中药材厂">
        <template #title>
          <span class="custom-title">已发货</span>
          <span class="orders_id">订单编号127400274930</span>
        </template>
      </van-cell>
      <van-cell center icon="location" is-link label="上海市闵行区上海康城小区城道80号503室">
        <template #title>
          <span class="custom-title">张杰医师</span>
          <span class="phone">127400274930</span>
        </template>
      </van-cell>
      <div class="cell_info">
        <div>
          <div class="info_image">
            <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </div>
          <div>
            <div>¥19.9</div>
            <div>×1</div>
            <div>宁夏枸杞</div>
            <div>250/g 一袋</div>
          </div>
        </div>
        <div>
          <span>商品总价</span>
          <span>19</span>
        </div>
        <div>
          <span>运费</span>
          <span>19</span>
        </div>
        <div>
          <span>实付款</span>
          <span>19</span>
        </div>
      </div>
    </div>
    <div class="footer_div">
      <span>确认收货</span>
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
    .cell_info {
      padding: 15px;
      background-color: #fff;
      > div:first-child {
        width: 100%;
        display: flex;
        .info_image {
          width: 140px;
          height: 100px;
        }
      }
    }
  }
  .footer_div {
    position: fixed;
    bottom: 0;
    height: 45px;
    width: 100%;
    background-color: #fff;
    text-align: right;
    line-height: 50px;
    padding-right: 20px;
    span {
      border: solid 1px #7e3330;
      border-radius: 25px;
      font-size: 14px;
      padding: 4px 8px;
      color: #7e3330;
    }
  }
}
</style>
