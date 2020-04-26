<template>
  <div class="detailsRefund">
    <van-nav-bar class="head_nav" left-text="返回" title="退款详情" left-arrow @click-left="back" />
    <div class="detailsRefund_main">
      <div class="d_date">
        <div>请等待商家处理</div>
        <div>还剩1天23时56分</div>
      </div>
      <div class="d_text">
        <van-panel title="你已成功发起退款申请，请耐心等待商家处理。">
          <template #default>
            <div class="desc_p">
              <div>
                商家同意或者超时未处理，系统将退款给你
                如果商家拒绝，你可以修改退款申请后再次发起，商家会重新处理。
              </div>
            </div>
            <div class="footer_p">
              <van-button size="small">撤销申请</van-button>
              <van-button size="small">修改申请</van-button>
            </div>
          </template>
        </van-panel>
      </div>
      <div></div>
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
.detailsRefund {
  width: 100%;
  height: 100%;
  .detailsRefund_main {
    width: 100%;
    height: auto;
    .d_date {
      width: 100%;
      height: 100px;
      background-color: #daaf6b;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 40px;
      > div {
        font-size: 15px;
        width: 100%;
        color: #fff;
      }
      > div:first-child {
        margin-bottom: 10px;
      }
    }
    .d_text {
      background-color: #fff;
      width: 100%;
      height: auto;
      .van-panel {
        .van-panel__header {
          .van-cell__title {
            > span {
              font-size: 16px;
              color: #000;
            }
          }
        }
        .van-panel__content {
          padding: 0 0 20px 20px;
          color: #666666;
          font-size: 14px;
          .desc_p {
            > div {
              margin-top: 10px;
    line-height: 30px;
            }
          }
          .footer_p {
            margin-top: 10px;
            text-align: right;
            padding-right: 20px;
            > button:first-child {
              border: solid 1px #a0a0a0;
              color: #a0a0a0;
              border-radius: 25px;
            }
            > button:last-child {
              border: solid 1px #7e3330;
              color: #7e3330;
              border-radius: 25px;
            }
          }
        }
      }
    }
  }
}
</style>
