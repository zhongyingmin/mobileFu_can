<template>
  <div class="confirmOrder">
    <van-nav-bar class="head_nav" left-text="返回" title="确认订单" left-arrow @click-left="back" />
    <div class="confirmOrder_main">
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
              <div>
                <div>
                  <span>
                    250/g 一袋
                    <van-icon name="play" />
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div>¥19.9</div>
              <div>×1</div>
            </div>
          </div>
        </div>
        <!-- <div class="button_t">
          <span @click="goPath('/refundAfter/applyRefund')">退款</span>
        </div>-->
        <div>
          <span>配送方式</span>
          <span>快递免邮</span>
        </div>
        <div>
          <span>共1件</span>
          <span>
            小计:
            <span>¥19.9</span>
          </span>
        </div>
      </div>
    </div>
    <div class="footer_div">
      <div>
        <span>共{{list.length}}件</span>
        <span>合计:</span>
        <!-- <span>¥{{sum | toFixed}}</span> -->
        <span>¥19.9</span>
        <span>确认订单</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      value: "",
      list: [
        {
          title: "宁夏枸杞",
          tag: "250/g 一袋",
          price: 19.9,
          value: 1
        }
      ]
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
    goPath(path) {
      this.$router.push(path);
    }
  }
};
</script>
<style lang="scss" scoped>
.confirmOrder {
  width: 100%;
  height: 100%;
  .confirmOrder_main {
    .van-cell {
      margin: 15px 0;
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
      // padding: 5px 15px 15px;
      width: 100%;
      background-color: #fff;
      > .info_first {
        width: 100%;
        height: 95px;
        display: flex;
        padding: 15px;
        border-bottom: 1px solid #f5f5f5;
        .info_image {
          width: 90px;
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
              margin-top: 18px;
              > div {
                display: inline-flex;
                align-items: center;
                position: relative;
                background-color: RGBA(210, 210, 210, 0.6);
                border-radius: 5px;
                padding: 3px 10px;
                span {
                  display: inline-block;
                  max-width: 140px;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  padding-right: 15px;
                  color: #333333;
                }
                i {
                  position: absolute;
                  right: 7px;
                  top: 6px;
                  transform: rotate(90deg);
                  color: #454545;
                }
              }
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
        padding: 15px 15px 0;
        font-size: 14px;
      }
      > div:last-child {
        font-size: 14px;
        justify-content: flex-end;
        > span:last-child {
          margin-left: 10px;
          > span {
            margin-left: 2px;
            color: #7e3330;
          }
        }
      }
    }
  }
  .footer_div {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 4px 15px;
    height: 45px;
    background-color: #fff;
    border-top: 1px solid #d1d1d1;
    > div:first-child {
      display: inline-flex;
      align-items: center;
      color: #000;
      height: 100%;
      >span{
        margin-left: 10px;
      }
      span:nth-of-type(3) {
        color: #7e3330;
        margin-left: 5px;
      }
      span:last-child {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background-image: linear-gradient(90deg, #e6c469 0%, #c8a060 100%),
          linear-gradient(#7e3330, #7e3330);
        background-blend-mode: normal, normal;
        border-radius: 35px;
        color: #fff;
        width: 120px;
        height: 100%;
      }
    }
  }
}
</style>
