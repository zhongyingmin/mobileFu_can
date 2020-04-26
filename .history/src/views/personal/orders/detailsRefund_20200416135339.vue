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
                <br />如果商家拒绝，你可以修改退款申请后再次发起，商家会重新处理。
              </div>
            </div>
            <div class="footer_p">
              <van-button size="small">撤销申请</van-button>
              <van-button size="small">修改申请</van-button>
            </div>
          </template>
        </van-panel>
      </div>
      <div class="d_info">
        <div>退款信息</div>
        <div>
          <div>
            <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </div>
          <div>
            <div>宁夏枸杞</div>
            <div>规格:250/g 3袋</div>
          </div>
        </div>
        <div>
          <div>退款原因：其他</div>
          <div>退款金额：¥19.9</div>
          <div>申请时间：2020-4-8 15:00</div>
          <div>退款编号：974827294899837</div>
        </div>
      </div>
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
    .d_info {
      margin-top: 15px;
      width: 100%;
      height: auto;
      background-color: #fff;
      > div:first-child {
        padding: 10px 0 10px 10px;
      }
      > div:nth-of-type(2) {
        width: 100%;
        height: 120px;
        display: flex;
        padding: 10px;
        background-color: #f5f5f5;
        > div:first-child {
          width: 140px;
          height: 100%;
          border-radius: 5px;
          overflow: hidden;
        }
        > div:last-child {
          width: 65%;
          height: 100%;
          padding: 0 10px;
          > div:first-child {
            color: #000;
          }
          > div:last-child {
            font-size: 14px;
            color: #666666;
            margin-top: 10px;
          }
        }
      }
      > div:last-child {
        width: 100%;
        height: auto;
        padding: 0 10px;
        font-size: 14px;
        color: #666666;
        > div {
          padding: 10px 0;
        }
      }
    }
  }
}
</style>
