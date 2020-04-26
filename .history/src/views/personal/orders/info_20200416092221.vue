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
        <div class="info_first">
          <div class="info_image">
            <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </div>
          <div>
            <div>
              <div>宁夏枸杞</div>
              <div>250/g 一袋</div>
            </div>
            <div>
              <div>¥19.9</div>
              <div>×1</div>
            </div>
          </div>
        </div>
        <div>
          <span>退款</span>
        </div>
        <div>
          <span>商品总价</span>
          <span>¥19.9</span>
        </div>
        <div>
          <span>运费</span>
          <span>¥00.0</span>
        </div>
        <div>
          <span>实付款</span>
          <span>¥19.9</span>
        </div>
      </div>
      <div class="orders_info_item">
        <div>
          <span></span> 订单信息
        </div>
        <div>
          <span>订单编号：</span>
          <span>202004084723</span>
        </div>
        <div>
          <span>创建时间：</span>
          <span>20200408472314: 20</span>
        </div>
        <div>
          <span>付款时间：</span>
          <span>20200408472315: 00</span>
        </div>
        <div>
          <span>发货编号：</span>
          <span>20200408472315: 00</span>
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
    padding: 15px 0 60px;
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
      padding: 5px 15px 15px;
      width: 100%;
      background-color: #fff;
      > .info_first {
        width: 100%;
        height: 95px;
        display: flex;
        .info_image {
          width: 125px;
          height: 100%;
          border-radius: 5px;
          overflow: hidden;
        }
        > div:last-child {
          flex-grow: 1;
          padding-left: 15px;
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          > div:first-child {
            height: 100%;
            color: #000;
            > div:first-child {
              font-size: 16px;
            }
            > div:last-child {
              font-size: 13px;
              margin-top: 15px;
            }
          }
          > div:last-child {
            height: 100%;
            text-align: right;
            > div:first-child {
              font-size: 13px;
              color: #000;
            }
            > div:last-child {
              font-size: 13px;
              margin-top: 2px;
              color: #666666;
            }
          }
        }
      }
      > div {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
      }
      > div:nth-of-type(2) {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        > span {
          border: solid 1px #a0a0a0;
          border-radius: 25px;
          font-size: 14px;
          padding: 4px 8px;
          color: #a0a0a0;
        }
      }
      > div:nth-of-type(3) {
        font-size: 13px;
      }
      > div:nth-of-type(4) {
        font-size: 13px;
      }
      > div:nth-of-type(5) {
        font-size: 16px;
        > span:last-child {
          color: #7e3330;
        }
      }
    }
    .orders_info_item {
      margin-top: 15px;
      padding: 15px 15px 0;
      background-color: #fff;
      > div:first-child {
        display: flex;
        align-items: center;
        font-size: 16px;
        color: #000;
        > span {
          display: inline-block;
          width: 2px;
          height: 18px;
          margin-right: 5px;
          background-color: #c8a060;
        }
      }
      > div {
        padding-bottom: 15px;
        font-size: 13px;
        color: #666;
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
